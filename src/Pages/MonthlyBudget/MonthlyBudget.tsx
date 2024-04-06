import Budget from "./componants/Budget";
import Expenses from "./componants/Expenses/Expenses";
import Header from "./componants/Header";

const MonthlyBudget = () => {
  return (
    <div className="container-fluid mobile">
      <Header />
      <Budget />
      <Expenses />
    </div>
  );
}

export default MonthlyBudget