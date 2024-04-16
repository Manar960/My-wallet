import useDateStore from '../../../../context/date-store'; 

const Header = () => {
  const setDate = useDateStore((state) => state.setSelectedDate);

 const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   const selectedDate = event.target.value;
   setDate(selectedDate);
 };


  return (
    <header>
      <div className="main-header mx-2 d-flex justify-content-between align-items-end mt-4">
        <h2 className="fw-bold">Dashboard</h2>
        <h6 className="pe-4 fs-6">
          <span className="Showing">Showing for: </span>{' '}
          <input type="date" id="date" name="dateFilter" onChange={handleDateChange} />
        </h6>
      </div>
    </header>
  );
};

export default Header;
