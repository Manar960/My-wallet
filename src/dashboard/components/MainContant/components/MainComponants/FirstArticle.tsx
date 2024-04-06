
const FirstArticle = () => {
  return (
    <article className="first bg-white rounded-4 mt-3 d-flex align-items-center justify-content-center flex-column">
      <h5 className="fw-bold">Total balance</h5>
      <div className="total d-flex">
        <h6 className="fw-bold">$</h6>
        <h1 className="fw-bold">12,319</h1>
      </div>
      <div className="number d-flex justify-content-center align-items-center rounded-3">
        <h6>
          <span className="fw-bolder">&#8593;</span> 3.27%
        </h6>
      </div>
    </article>
  );
};

export default FirstArticle;
