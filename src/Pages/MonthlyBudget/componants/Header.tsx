
const Header = () => {
  const goBack = () => {
    window.history.back(); 
  };
  return (
    <header className="mt-4 d-flex justify-content-between align-items-center">
      <i
        id="backIcon"
        className="fas fa-angle-left"
        style={{ fontSize: '25px', cursor: 'pointer' }}
        onClick={goBack}></i>

      <h5 className="mb-0 fw-bold">Monthly Budget</h5>
      <input
        className="btn fw-bold"
        style={{
          borderRadius: '13px',
          width: '70px',
          backgroundColor: '#ebe7f7',
          color: '#6950c1'
        }}
        type="button"
        value="Edit"
      />
    </header>
  );
};

export default Header;
