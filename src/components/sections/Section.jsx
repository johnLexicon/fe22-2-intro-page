import ChartCard from '../charts/ChartCard';
import SectionInfo from './SectionInfo';
const Section = ({ section }) => {
  return (
    <section
      id={section.page}
      className="vh-100"
      style={{ paddingTop: '7rem' }}
    >
      <h1>{section.header}</h1>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <ChartCard />
        <SectionInfo />
      </div>
      <footer className="mt-5">
        <span className="fw-bold">Notes:</span>
        <div className="lead p-3 border rounded text-danger">
          This is the legend of Cassius
        </div>
      </footer>
    </section>
  );
};

export default Section;
