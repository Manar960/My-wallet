import hand from '../../../../assets/images/hand.png';

const ButtomImg = () => {
  return (
    <div className='p-2 mt-auto'>
      <div className="check me-5 mt-auto rounded-4 d-sm-none d-md-block">
        <article className="pt-3 ps-2 fw-bold">
          Check all premium benefits for free right now!
        </article>
        <div className="hand d-flex align-items-center justify-content-between">
          <img src={hand} alt="" />
          <div className="circl d-flex align-items-center justify-content-center ms-4 mt-4 bg-white me-4">
            <span className="fw-bold fs-3">&#8600;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtomImg;
