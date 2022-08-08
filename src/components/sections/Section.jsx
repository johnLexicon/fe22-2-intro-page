import ChartCard from '../charts/ChartCard';
import SectionInfo from './SectionInfo';
import { useState } from 'react';
const Section = ({ section }) => {
  const [currentNotes, setCurrentNotes] = useState(null);

  // const handleShowNotes = (statementId) => {
  //   setCurrentInfo((state) => {
  //     const statement = section.statements.find((s) => s.id === statementId);
  //     return statement ? statement.notes : null;
  //   });
  // };
  return (
    <section
      id={section.page}
      className="vh-100"
      style={{ paddingTop: '7rem' }}
    >
      <h1>{section.header}</h1>
      <div
        id="sectionWrapper"
        className="d-flex justify-content-around align-items-center flex-wrap mt-5 mb-5"
      >
        <ChartCard moduleName={section.moduleName} />
        <SectionInfo
          statements={section.statements}
          setCurrentNotes={setCurrentNotes}
        />
      </div>
      <footer className="mt-5">
        <span className="fw-bold">Notes:</span>
        <div className="lead p-3 border rounded text-danger">
          {currentNotes}
        </div>
      </footer>
    </section>
  );
};

export default Section;
