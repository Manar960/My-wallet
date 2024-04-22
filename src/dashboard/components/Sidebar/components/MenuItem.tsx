import { Link } from 'react-router-dom';

const MenuItem = ({ icon, name, to }: { icon: React.ReactNode; name: string; to: string }) => {
  return (
    <Link to={to} className="header-item d-flex p-3">
        <span className="ms-2 d-flex align-item-start" style={{ fontSize: '26px'}}>
          {icon}
        </span>
      <span className="header-item-label d-block ps-3">{name}</span>
    </Link>
  );
};

export default MenuItem;
