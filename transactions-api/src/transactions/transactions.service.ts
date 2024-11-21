import { Injectable } from '@nestjs/common';
import { Repository, Between } from 'typeorm';
import { Transaction } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
  ) {}

  async getTransactionsByDateRange({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate?: string;
  }): Promise<Transaction[]> {
    const end = endDate || '9999-12-31';
    return this.transactionRepository.find({
      where: {
        date: Between(startDate, end),
      },
    });
  }
}
