
const EXheader = () => {
  return (
    <header className="d-flex justify-content-between p-4">
      <h3>Expenses</h3>
      <h5 style={{ color: '#5d43bd' }}>
        View all
        <span>
          <i className="fas fa-angle-right" style={{ fontSize: '24px' }}></i>
        </span>
      </h5>
    </header>
  );
};

export default EXheader;
