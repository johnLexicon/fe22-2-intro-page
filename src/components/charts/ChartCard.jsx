import PieChart from './PieChart';

const ChartCard = ({ moduleName }) => {
  return (
    <div className="chart-wrapper bg-dark p-5">
      <PieChart moduleName={moduleName} />
    </div>
  );
};

export default ChartCard;
