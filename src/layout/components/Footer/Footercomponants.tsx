import { Link } from 'react-router-dom';

interface Props {
  to: string;
  name: string;
  color: string;
}

function FooterComponent({ to, name, color }: Props) {
  return (
    <div>
      <Link to={to} className={`btn fs-3 ${color}`}>
        <span className={name}></span>
      </Link>
    </div>
  );
}

export default FooterComponent;
