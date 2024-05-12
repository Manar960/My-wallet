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
  getNextId(): number {
    const transactionsData = this.getAllTransactions();
    return transactionsData.length > 0
      ? Math.max(...transactionsData.map((transaction) => transaction.id)) + 1
      : 1;
  },
  addTransaction(transaction: Transaction): void {
    transaction.id = this.getNextId();
    const transactionsData = this.getAllTransactions();
    transactionsData.push(transaction);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactionsData));
  },

  removeTransaction(id: number): void {
    let transactionsData = this.getAllTransactions();
    transactionsData = transactionsData.filter((transaction) => transaction.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactionsData));
  },
  updateTransaction(updatedTransaction: Transaction): void {
    let transactionsData = this.getAllTransactions();
    const index = transactionsData.findIndex(
      (transaction) => transaction.id === updatedTransaction.id
    );
    if (index !== -1) {
      transactionsData[index] = updatedTransaction;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(transactionsData));
    }
  },
  filterTransactions(period: string): Transaction[] {
    const transactions = this.getAllTransactions();
    const currentDate = new Date();

    switch (period) {
      case 'Today':
        const today = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        );
        return transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= today;
        });
      case 'Month':
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        return transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= firstDayOfMonth;
        });
      case 'Year':
        const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
        return transactions.filter((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate >= firstDayOfYear;
        });
      default:
        return transactions;
    }
  },

  getTotalBalance(period: string): number {
    const filteredTransactions = this.filterTransactions(period);
    return filteredTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  },

  
};

export default TransactionService;
