import img from '../../../assets/images/progressbar.png'

const Budget = () => {
  return (
    <div>
      <div className="progressbar p-4 mt-3 text-center">
        <img src={img} style={{ width: '70%' }} alt="" />
      </div>
      <div className="d-flex justify-content-evenly mt-2">
        <article className="d-flex">
          <div>
            <i
              className="fas fa-wallet fs-3 p-3 rounded-4"
              style={{ backgroundColor: '#d6d7e8' }}/>
          </div>
          <div className="ms-3">
            <h3 className="mb-1">
              <span>&euro;</span>30
            </h3>
            <h6 style={{ color: '#abbac7' }}>Left today</h6>
          </div>
        </article>
        <article className="d-flex">
          <div>
            <i
              className="fas fa-money-bill-wave fs-3 p-3 rounded-4"
              style={{ backgroundColor: '#d6d7e8' }}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-1">
              <span>&euro;</span>128
            </h3>
            <h6 style={{ color: '#abbac7' }}>Spent today</h6>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Budget;
