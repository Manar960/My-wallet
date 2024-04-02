import { Link } from 'react-router-dom';

function FooterComponent(props: { to: string; name: string; color: string }) {
  return (
    <div>
      <Link to={props.to} className={`btn fs-3 ${props.color}`}>
        <span className={props.name}></span>
      </Link>
    </div>
  );
}

export default FooterComponent;
