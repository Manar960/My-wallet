
const Header = () => {
return (
  <header>
    <div className="main-header mx-2 d-flex justify-content-between align-items-end mt-4">
      <h2 className="fw-bold">Dashboard</h2>
      <h6 className="pe-4 fs-6">
        <span className="Showing">Showing for: </span>21Oct-28 Oct2020
        <span style={{ fontSize: '10px' }}>&#9660;</span>
      </h6>
    </div>
  </header>
);
}

export default Header