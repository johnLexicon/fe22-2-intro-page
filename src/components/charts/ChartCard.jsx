import PieChart from './PieChart';

const ChartCard = () => {
  return (
    <div className="card bg-dark text-white flex-fill">
      <div className="class-header">Front-End Modules</div>
      <div className="chart-wrapper">
        <PieChart />
      </div>
    </div>
  );
};

export default ChartCard;
