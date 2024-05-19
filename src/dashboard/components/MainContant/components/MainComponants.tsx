import BarChart from "./MainComponants/BarChart";
import FirstArticle from "./MainComponants/FirstArticle";
import SecondArticle from "./MainComponants/SecondArticle";


const Main = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className=" row cal justify-content-between d-flex pe-4">
          <div className="col">
          <FirstArticle/>
          </div>
          <div className="col">
            <SecondArticle/>
          </div>
        </div>
      </div>
      <BarChart/>
    </main>
  );
};

export default Main;
