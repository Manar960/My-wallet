const MenuItem = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <a href="#" className="header-item d-flex p-3 ">
      <div className="square text-center fw-bold d-flex justify-content-center align-items-center">
        <span>{icon}</span>
      </div>
      <span className="header-item-label ps-3">{name}</span>
    </a>
  );
}; 


export default MenuItem;
