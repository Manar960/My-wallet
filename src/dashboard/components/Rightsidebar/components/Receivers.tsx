
const Receivers = () => {
  return (
    <div>
      <h6 className="px-4 mt-4">Receivers</h6>
      <section className="wrapper d-flex flex-row px-4 mt-3 overflow-x-auto justify-content-between">
        <div
          className="bell-icon w-item d-flex justify-content-center align-items-center"
          style={{ border: '1px dashed #8e9aae' }}>
          <i
            className="fa fa-plus"
            style={{ fontSize: '22px', color: '#8e9aae', fontWeight: '100' }}></i>
        </div>
        <article className="w-item">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Ali"
            alt=""
          />
        </article>
        <article className="w-item">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Flix"
            alt=""
          />
        </article>
        <article className="w-item">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Hoshi"
            alt=""
          />
        </article>
        <article className="w-item">
          <img
            src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Abeer"
            alt=""
          />
        </article>
      </section>
    </div>
  );
};

export default Receivers;
