import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private apiUrl = 'api/transactions';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTransaction(txn: { date: Date; recipientUPI: string; amount: number; note: string; status: string; }): Observable<any> {
    return this.http.post(this.apiUrl, txn);
  }
}
