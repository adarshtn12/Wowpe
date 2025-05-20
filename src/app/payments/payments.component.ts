import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentComponent {
  upi = '';
  amount!: number;
  note = '';
  message = '';

  constructor(private txnService: TransactionService, private router: Router) {}

  isValidUPI(upi: string): boolean {
    return /^[\w.-]+@[\w]+$/.test(upi);
  }

  submitPayment() {
    if (!this.isValidUPI(this.upi) || this.amount <= 0) {
      this.message = 'Invalid UPI or amount';
      return;
    }

    this.txnService.addTransaction({
      date: new Date(),
      recipientUPI: this.upi,
      amount: this.amount,
      note: this.note,
      status: 'Success'
    }).subscribe(() => {
      this.message = 'Payment Successful!';
    });
  }
}
