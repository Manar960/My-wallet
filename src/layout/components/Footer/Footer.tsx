
import FooterComponent from './Footercomponants';

const Footer = () => {
  return (
    <footer className="navbar bg-white d-sm-none fixed-bottom">
      <div className="container-fluid">
        <FooterComponent to="/" name={'fas fa-home'} color={''} />
        <FooterComponent to="/address" name={'far fa-address-card'} color={'text-body-secondary'} />
        <FooterComponent
          to="/monthlyBudget"
          name={'fas fa-piggy-bank'}
          color={'text-body-secondary'}
        />
        <FooterComponent to="/heartbeat" name={'fas fa-heartbeat'} color={'text-body-secondary'} />
      </div>
    </footer>
  );
};

export default Footer;
