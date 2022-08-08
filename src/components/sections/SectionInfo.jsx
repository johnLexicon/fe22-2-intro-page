const SectionInfo = ({ statements, setCurrentNotes }) => {
  return (
    <div id="sectionInfo">
      <ul>
        {statements.map((statement, index) => (
          <li
            onMouseEnter={() => setCurrentNotes(statement.notes)}
            onMouseLeave={() => setCurrentNotes(null)}
            id="statementValue"
            className="unselect h3 mb-3"
            key={index}
          >
            {statement.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionInfo;
