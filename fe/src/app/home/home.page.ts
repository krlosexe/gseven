import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  startDate: string = '2024-10-01';
  endDate: string = '';
  transactions: Transaction[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.fetchTransactions();
  }

  async fetchTransactions() {
    try {
      this.isLoading = true;
      const data = await this.transactionsService.getTransactions(this.startDate, this.endDate).toPromise();
      this.transactions = data ?? [];
    } catch (err) {
      console.error('Error fetching transactions:', err);
      this.errorMessage = 'Error fetching transactions'; 
    } finally {
      this.isLoading = false;
    }
  }

  onDateChange(event: { startDate?: string, endDate?: string }) {
    const { startDate, endDate } = event;

    if (startDate) {
      this.startDate = startDate;
    }
    if (endDate) {
      this.endDate = endDate;
    }

    if (this.startDate && this.endDate && this.startDate > this.endDate) {
     // console.error('La fecha de inicio no puede ser posterior a la fecha de fin.');
      this.errorMessage = 'La fecha de inicio no puede ser posterior a la fecha de fin.';
      return;
    }

    this.fetchTransactions();
  }

  clearError() {
    this.errorMessage = null;  
  }


}
