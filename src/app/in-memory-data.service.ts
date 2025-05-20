import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const transactions = [
      { date: new Date(), recipientUPI: 'demo@upi', amount: 100, note: 'Test', status: 'Success' }
    ];
    return { transactions };
  }
}
