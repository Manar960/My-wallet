import { Link } from 'react-router-dom';

const MenuItem = ({
  icon,
  name,
  to,
  onClick
}: {
  icon: React.ReactNode;
  name: string;
  to: string;
  onClick?: () => void;
}) => {
  return (
    <Link to={to} className="header-item d-flex p-3" onClick={onClick}>
      <span className="ms-2 d-flex align-item-start" style={{ fontSize: '26px' }}>
        {icon}
      </span>
      <span className="header-item-label d-block ps-3">{name}</span>
    </Link>
  );
};

export default MenuItem;
