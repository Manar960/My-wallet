import BarChart from "./MainComponants/BarChart";
import FirstArticle from "./MainComponants/FirstArticle";
import SecondArticle from "./MainComponants/SecondArticle";


const Main = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row cal justify-content-between d-flex pe-4">
          <div className="col-lg-6">
          <FirstArticle/>
          </div>
          <div className="col-lg-6">
            <SecondArticle/>
          </div>
        </div>
      </div>
      <BarChart/>
    </main>
  );
};

export default Main;
