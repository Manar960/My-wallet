import dayjs from 'dayjs';
import img from '../../../../../assets/images/bar.png';
import useDateStore from '../../../../../context/date-store';
const BarChart = () => {
    const selectedDate = useDateStore((state) => state.selectedDate);
    const formattedDate = dayjs(selectedDate).format('MM/DD/YYYY');

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <section className="column-container flex-column bg-white rounded-4 d-flex align-items-center justify-content-center overflow-hidden">
            <h5 className="pt-5">Date is: {formattedDate}</h5>
            <img src={img} alt="bar chart" className="pb-5" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
