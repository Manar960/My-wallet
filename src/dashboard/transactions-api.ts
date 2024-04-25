export interface Transaction {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
}

const STORAGE_KEY = `transactions`;

const TransactionService = {
  getAllTransactions(): Transaction[] {
    const transactionsData = localStorage.getItem(STORAGE_KEY);
    return transactionsData ? JSON.parse(transactionsData) : [];
  },

  getTransaction(id: number): Transaction | undefined {
    const transactionsData = this.getAllTransactions();
    return transactionsData.find((transaction) => transaction.id === id);
  },

  addTransaction(transaction: Transaction): void {
    const transactionsData = this.getAllTransactions();
    transactionsData.push(transaction);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactionsData));
  },

  removeTransaction(id: number): void {
    let transactionsData = this.getAllTransactions();
    transactionsData = transactionsData.filter((transaction) => transaction.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactionsData));
  }
};

export default TransactionService;
