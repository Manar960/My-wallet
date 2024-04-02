import { Doughnut } from 'react-chartjs-2';

const chartData = {
  data: [20, 15, 17]
};

const doughnutColors = ['#6f83ff', '#ff8bb9', '#ffb0d0'];
const largestDataIndex = chartData.data.indexOf(Math.max(...chartData.data));

const data = {
  datasets: [
    {
      data: chartData.data,
      backgroundColor: doughnutColors,
      borderWidth: chartData.data.map((value, index) => (index === largestDataIndex ? 0 : 3))
    }
  ]
};

const options = {
  aspectRatio: 1.8,
  borderWidth: 50,
  borderRadius: 8,
  hoverBorderWidth: 0,
  cutout: 65,
  plugins: {
    legend: {
      display: false
    }
  }
};

const DonutChart = () => {
  return (
    <div className="chart-container d-flex justify-content-center align-items-center position-relative">
      <Doughnut data={data} options={options} />
      <div className="chart-text position-absolute text-center">
        <h3>$3,137</h3>
        <span>House Rent</span>
      </div>
    </div>
  );
};

export default DonutChart;
