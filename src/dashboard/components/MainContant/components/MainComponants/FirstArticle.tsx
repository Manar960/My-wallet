import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import useDashboardStore from '../../../../../context/dashboardStore';
import TransactionService from '../../../../transactions-api';

const FirstArticle = () => {
  const periods = ['Today', 'Month', 'Year'];
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const setPeriod = useDashboardStore((state) => state.setPeriod);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    setPeriod(selectedPeriod);
  }, [selectedPeriod, setPeriod]);

  useEffect(() => {
    const balance = TransactionService.getTotalBalance(selectedPeriod);
    setTotalBalance(balance);
  }, [selectedPeriod]);

  const handlePeriodChange = (event: { value: string }) => {
    setSelectedPeriod(event.value);
  };

  return (
    <article className="first bg-white rounded-4 mt-3 d-flex align-items-center justify-content-center flex-column shadow-sm">
      <div className="d-flex align-items-start ">
        <h5 className="fw-bold pe-2">Total balance :</h5>
        <Dropdown
          placeholder="Period"
          value={selectedPeriod}
          options={periods.map((period) => ({ label: period, value: period }))}
          onChange={handlePeriodChange}
          className=" shadow-sm"
          style={{
            alignItems: 'center',
            paddingLeft: '10px',
            border: 'none'
          }}
        />
      </div>
      <div className="total d-flex mt-2">
        <h6 className="fw-bold">$</h6>
        <h1 className="fw-bold">{totalBalance}</h1>
      </div>
      <div className="number d-flex justify-content-center align-items-center rounded-3">
        <h6>
          <span className="fw-bolder">&#8593;</span> 3.27%
        </h6>
      </div>
    </article>
  );
};

export default FirstArticle;
