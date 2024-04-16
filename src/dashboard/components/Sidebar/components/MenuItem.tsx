import { Link } from 'react-router-dom';

const MenuItem = ({ icon, name, to }: { icon: string; name: string; to: string }) => {
  return (
    <Link to={to} className="header-item d-flex p-3">
      <div className="square text-center fw-bold d-flex justify-content-center align-items-center">
        <span>{icon}</span>
      </div>
      <span className="header-item-label ps-3">{name}</span>
    </Link>
  );
};

export default MenuItem;
