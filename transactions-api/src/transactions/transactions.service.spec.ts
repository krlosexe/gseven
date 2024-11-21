import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { DataSource } from 'typeorm';

const mockTransactionRepository = {
  find: jest.fn().mockResolvedValue([
    {
      id: 1,
      amount: 100,
      description: 'Test Transaction 1',
      createdAt: new Date(),
    },
    {
      id: 2,
      amount: 200,
      description: 'Test Transaction 2',
      createdAt: new Date(),
    },
  ]),
  save: jest.fn().mockResolvedValue({
    id: 3,
    amount: 300,
    description: 'Test Transaction 3',
    createdAt: new Date(),
  }),
};

const mockDataSource = {
  getRepository: jest.fn().mockReturnValue(mockTransactionRepository),
};

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        TransactionsService,
        {
          provide: getRepositoryToken(Transaction),
          useValue: mockTransactionRepository,
        },
        {
          provide: DataSource,
          useValue: mockDataSource,
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all transactions', async () => {
    const transactions = await service.getTransactionsByDateRange({
      startDate: '2024-10-01',
      endDate: '2024-11-30',
    });
    expect(transactions).toHaveLength(2);
    expect(transactions[0].amount).toBe(100);
  });
});
