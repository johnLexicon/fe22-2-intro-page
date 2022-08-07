import PieChart from './PieChart';

const ChartCard = () => {
  return (
    <div id="chartCard" className="card bg-dark text-white h-100">
      <div className="card-body chart-wrapper">
        <PieChart />
      </div>
    </div>
  );
};

export default ChartCard;
