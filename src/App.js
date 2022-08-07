import './App.css';
import Navbar from './components/Navbar';
import Section from './components/sections/Section';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main className="container-fluid">
        <Section header="Modules" />
        <Section header="Module 1: UX/UI" />
        <Section header="Module 2: HTML/CSS/JavaScript" />
        <Section header="Module 3: Back-End" />
        <Section header="Module 4: Vue.js" />
        <Section header="Module 5: React JS" />
        <Section header="Module 6: Agile Development" />
      </main>
    </div>
  );
}

export default App;
