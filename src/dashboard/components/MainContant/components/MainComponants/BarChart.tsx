import Chart from 'react-apexcharts';

import TransactionService, {
  Transaction
} from '../../../../DashPages/Transaction/transactions-api';

const BarChart = () => {
  const getMonthlyAmounts = (): number[] => {
    const transactions = TransactionService.getAllTransactions();

    const monthlyAmounts: number[] = Array.from({ length: 12 }).fill(0) as number[];

    transactions.forEach((transaction: Transaction) => {
      const transactionDate = new Date(transaction.date);
      const month = transactionDate.getMonth();
      const amount = transaction.amount;
      monthlyAmounts[month] += amount;
    });

    return monthlyAmounts;
  };

  const monthlyAmounts: number[] = getMonthlyAmounts();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const colors = ['#ff8bb9'];

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-lg-12">
          <section className="column-container bg-white rounded-4 d-flex flex-column align-items-center justify-content-center shadow-sm">
            <h5 className="mt-3">Expenses Each Month</h5>
            <div className="barChart">
              <Chart
                options={{
                  xaxis: {
                    categories: months
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 8
                    }
                  },
                  colors: colors
                }}
                series={[
                  {
                    name: 'Amount',
                    data: monthlyAmounts
                  }
                ]}
                type="bar"
                width={740}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
