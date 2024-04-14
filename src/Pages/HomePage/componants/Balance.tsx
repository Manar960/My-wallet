import { SiVisa } from 'react-icons/si';
import { FaShekelSign } from 'react-icons/fa6';

const Balance = () => {
  return (
    <article className="t-balance d-flex flex-column mt-4">
      <p className="ps-3 mb-0" style={{ color: '#b5c1ce' }}>
        Total balance
      </p>
      <h2 className="ps-3">
        <span>&euro;</span>3,216.38
      </h2>
      <article className="Visa-card rounded-4 ms-3">
        <div className="logo d-flex justify-content-between px-4 align-items-end pt-2">
          <SiVisa style={{ width: '50px', height: '50px', color: 'white' }} />
          <p className='fw-bold' style={{ color: 'white'  }}>
            <FaShekelSign />
            1,360.23
          </p>
        </div>
        <div className="total d-flex ps-4 pt-5 text-light">
          <h4 className="fw-bold">MAIN CARD </h4>
        </div>
        <div className="d-flex justify-content-between px-4 pt-2 " style={{ color: '#f2d5f7' }}>
          <div className="d-flex text-white">
            <i className="fas fa-ellipsis-h pe-3 pt-2 "></i>
            <p>1784</p>
          </div>
          <p>01/20</p>
        </div>
      </article>{' '}
    </article>
  );
};

export default Balance;
