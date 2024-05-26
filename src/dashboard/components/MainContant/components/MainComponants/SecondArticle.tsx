import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import TransactionService, {
  Transaction
} from '../../../../DashPages/Transaction/transactions-api';
import useDashboardStore from '../../../../../context/dashboardStore';

const SecondArticle = () => {
  const [categoryData, setCategoryData] = useState<{ label: string; total: number }[]>([]);
  const selectedPeriod = useDashboardStore((state) => state.period);

  useEffect(() => {
    const calculateCategoryTotal = () => {
      const transactions = TransactionService.filterTransactions(selectedPeriod || 'Month');
      const categoryMap = new Map<string, number>();

      transactions.forEach((transaction: Transaction) => {
        const category = transaction.category;
        const amount = transaction.amount;
        if (categoryMap.has(category)) {
          const currentTotal = categoryMap.get(category)!;
          categoryMap.set(category, currentTotal + amount);
        } else {
          categoryMap.set(category, amount);
        }
      });

      const formattedData = Array.from(categoryMap).map(([category, total]) => ({
        label: category,
        total: total
      }));

      setCategoryData(formattedData);
    };

    calculateCategoryTotal();
  }, [selectedPeriod]);

  const labels = categoryData.map((data) => data.label);
  const colors = ['#6f83ff', '#ffb0d0', '#ff8bb9', '#d2d9f4'];

  return (
    <article className="second bg-white rounded-4 mt-2 shadow-sm">
      <div className="expenses">
        <h5 className="d-flex align-items-end justify-content-between">
          Expenses <span>&#8229;</span>
        </h5>
      </div>
      <div className="donut ">
        {categoryData.length > 0 ? (
          <Chart
            options={{
              labels: labels,
              colors: colors,
              chart: {
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                    enabled: true,
                    delay: 150
                  },
                  dynamicAnimation: {
                    enabled: true,
                    speed: 350
                  }
                }
              }
            }}
            series={categoryData.map((data) => data.total)}
            type="donut"
            width="380"
            height={215}
          />
        ) : (
          <div className="msg">
            <p className="">There are no Expenses for {selectedPeriod}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default SecondArticle;
