import { BiLogoMastercard } from 'react-icons/bi';
import { CiSquarePlus } from 'react-icons/ci';

const YourCard = () => {
  return (
    <>
      <div className="cards-title d-flex justify-content-between p-3">
        <h6 className="d-flex align-items-end">Your cards</h6>
        <div className=" d-flex justify-content-center align-items-center">
          <CiSquarePlus
            style={{ fontSize: '40px', color: '#8e9aae', fontWeight: '100' }}></CiSquarePlus>
        </div>
      </div>
      <article className="your-card rounded-4 ms-3">
        <div className="logo d-flex justify-content-between px-4 align-items-end pt-3">
          <BiLogoMastercard style={{ width: '50px', height: '50px', color: '#f1eafe' }} />
          <p style={{ color: '#f2d5f7' }}>Debit</p>
        </div>
        <div className="total d-flex ps-4 pt-3 text-light">
          <h6 className="fw-bold">$</h6>
          <h1 className="fw-bold fs-1">6,520</h1>
        </div>
        <div className="d-flex justify-content-between px-4 pt-2 " style={{ color: '#f2d5f7' }}>
          <div className="d-flex text-white">
            <i className="fas fa-ellipsis-h pe-3 pt-1 "></i>
            <p>3917</p>
          </div>
          <p>04/24</p>
        </div>
      </article>
    </>
  );
};

export default YourCard;
