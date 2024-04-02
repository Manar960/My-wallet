import Footer from "../../layout/components/Footer/Footer";
import Budget from "./componants/Budget";
import Expenses from "./componants/Expenses/Expenses";
import Header from "./componants/Header";

const MonthlyBudget = () => {
  return (
    <div className="container-fluid mobile">
      <Header />
      <Budget />
      <Expenses />
      <Footer />
    </div>
  );
}

export default MonthlyBudget