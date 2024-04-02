import Chart from "./MainCom/Chart";
import Firstarticle from "./MainCom/Firstarticle";
import Secarticle from "./MainCom/Secarticle";

const Main = () => {
  return (
    <main>
      <div className="container-fluid">
        <div className="row cal justify-content-between d-flex pe-4">
          <div className="col-lg-6">
          <Firstarticle/>
          </div>
          <div className="col-lg-6">
            <Secarticle/>
          </div>
        </div>
      </div>
      <Chart/>
    </main>
  );
};

export default Main;
