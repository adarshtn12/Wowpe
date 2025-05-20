import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
4

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent implements OnInit {
  transactions : any[] = [];
  search = '';

  constructor(private txnService: TransactionService) {}

  ngOnInit() {
    this.txnService.getTransactions().subscribe(data => this.transactions = data);
  }

  filterTransactions() {
    return this.transactions.filter(txn =>
      txn.recipientUPI.includes(this.search)
    );
  }
}

