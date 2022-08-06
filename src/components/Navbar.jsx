import logo from '../assets/images/lexicon.jpg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
      <div className="container-fluid">
        <div className="navbar-brand d-inline-block">
          <img src={logo} height="48" alt="Lexicon logo" />
        </div>
        <div className="h2 m-3">Front-End Course</div>
      </div>
    </nav>
  );
};

export default Navbar;
