import React, { useState, useEffect } from 'react';
import useDashboardStore from '../../../../context/dashboardStore';

const Header = () => {
  const setDate = useDashboardStore((state) => state.setSelectedDate);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    setDate(selectedDate);
  }, []);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    setDate(newDate);
  };

  return (
    <header>
      <div className="main-header mx-3 d-flex justify-content-between align-items-end mt-4">
        <h2 className="fw-bold">Dashboard</h2>
        <h6 className="pe-4 fs-6">
          <span className="Showing">Showing for: </span>{' '}
          {/* <input
            type="date"
            id="date"
            name="dateFilter"
            value={selectedDate}
            onChange={handleDateChange}
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '17px',
              backgroundColor: '#f7ebfe'
            }}
          /> */}
        </h6>
      </div>
    </header>
  );
};

export default Header;
