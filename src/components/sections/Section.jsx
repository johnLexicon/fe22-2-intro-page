import ChartCard from '../charts/ChartCard';
import SectionInfo from './SectionInfo';
const Section = ({ header }) => {
  return (
    <section className="vh-100">
      <h1>{header}</h1>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <ChartCard />
        <SectionInfo />
      </div>
    </section>
  );
};

export default Section;
