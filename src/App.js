import './App.css';
import NavArrows from './components/NavArrows';
import Navbar from './components/Navbar';
import Section from './components/sections/Section';
import ProgressBar from './components/ProgressBar';
import { useState, useEffect } from 'react';
import sectionData from './data/data.json';

function App() {
  const [sections] = useState(sectionData.sections);
  const [currentPage, setCurrentPage] = useState(1);

  const navigateTo = (direction) => {
    if (direction === 'up' && currentPage > 1)
      setCurrentPage((state) => state - 1);
    else if (
      direction === 'down' &&
      currentPage < sectionData.sections.length
    ) {
      setCurrentPage((state) => state + 1);
    }
  };

  useEffect(() => {
    document.getElementById(currentPage).scrollIntoView({ behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="App">
      <header className="position-fixed w-100 top-0">
        <Navbar />
        <ProgressBar
          progressValue={currentPage}
          maxProgress={sectionData.sections.length}
        />
      </header>
      <main className="container-fluid">
        {sections.map((section) => (
          <Section key={section.page} section={section} />
        ))}
      </main>
      <NavArrows
        handleNavigation={navigateTo}
        isFirstPage={currentPage === 1}
        isLastPage={currentPage === sectionData.sections.length}
      />
    </div>
  );
}

export default App;
