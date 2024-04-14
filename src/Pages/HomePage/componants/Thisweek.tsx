import { IoIosArrowDown } from 'react-icons/io';

const ThisWeek = () => {
  return (
    <article className="this-week ps-3 d-flex justify-content-between mt-4">
      <h6 className="d-flex">
        This-week
        <span className="ps-1">
          <IoIosArrowDown style={{ color: '#917fd2' }} />
        </span>
      </h6>
      <div className="d-flex">
        <h6 className="pe-3">
          <span className="horizontal-dash" style={{ backgroundColor: '#2e56d1' }}></span>Income
        </h6>

        <h6 className="pe-1">
          <span className="horizontal-dash" style={{ backgroundColor: '#f26161' }}></span>Expense
        </h6>
      </div>
    </article>
  );
};

export default ThisWeek;
