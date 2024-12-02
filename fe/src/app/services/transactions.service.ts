import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';
  
@Injectable({
  providedIn: 'root',
})

export class TransactionsService {
  private apiUrl = 'http://3.81.218.199/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(startDate: string, endDate: string): Observable<Transaction[]> {
    let params: {startDate: string, endDate?: string} = { startDate };

    if (endDate) {
      params.endDate = endDate;
    }

    return this.http.get<Transaction[]>(this.apiUrl, { params });
  }
}
