import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from 'react';
import useDashboardStore from '../../../../context/dashboardStore';
import TransactionService from '../../../DashPages/Transaction/transactions-api';

const Header = () => {
  const periods = ['Today', 'Month', 'Year'];
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const setPeriod = useDashboardStore((state) => state.setPeriod);
  const setTotalBalance = useDashboardStore((state) => state.setTotalBalance);
  useEffect(() => {
    setPeriod(selectedPeriod);
  }, [selectedPeriod, setPeriod]);
  const handlePeriodChange = (event: { value: string }) => {
    setSelectedPeriod(event.value);
  };
  useEffect(() => {
    const balance = TransactionService.getTotalBalance(selectedPeriod);
    setTotalBalance(balance);
  }, [selectedPeriod, setTotalBalance]);

  return (
    <header>
      <div className="main-header mx-3 d-flex justify-content-between align-items-end mt-4">
        <h2 className="fw-bold">Dashboard</h2>
        <h6 className="pe-4 fs-6">
          <span className="Showing">Showing for: </span>
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
        </h6>
      </div>
    </header>
  );
};

export default Header;
