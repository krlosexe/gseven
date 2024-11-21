import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { IsDateString, IsOptional, IsNotEmpty } from 'class-validator';
import { TransactionsService } from './transactions.service';
import { ApiOperation, ApiQuery } from '@nestjs/swagger';

class TransactionFilterDto {
  @IsNotEmpty({ message: 'Start date is required' })
  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;
}

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  @ApiOperation({ summary: 'Get transactions by date range' })
  @ApiQuery({
    name: 'startDate',
    description: 'Start date for transaction filter',
    required: true,
    type: Date,
    example: '2024-10-01',
  })
  @ApiQuery({
    name: 'endDate',
    description: 'End date for transaction filter (optional)',
    required: false,
    type: Date,
    example: '2024-10-31',
  })
  async getTransactions(
    @Query(new ValidationPipe({ transform: true }))
    dateRange: TransactionFilterDto,
  ) {
    const result =
      await this.transactionsService.getTransactionsByDateRange(dateRange);
    return result;
  }
}
