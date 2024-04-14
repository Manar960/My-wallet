function ExpensesCards(props: { name: string; color: string; amount: string ,icon:string}) {
  return (
    <div className="col mx-2" style={{ backgroundColor: props.color, borderRadius: '20px' }}>
      <p className="text-start my-5 rounded-5 row mt-4">
        <i className={`text-white ${props.icon} fs-1`}></i>
      </p>
      <p className="row ps-3 my-0 text-white fs-15 text-start">{props.name}</p>
      <p className="mt-1 my-0 ps-3 row text-white text-start fw-bold fs-3">{props.amount}</p>
    </div>
  );
}
export default ExpensesCards;
