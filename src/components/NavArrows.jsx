const NavArrows = ({ handleNavigation, isFirstPage, isLastPage }) => {
  return (
    <div className="arrow-nav position-fixed end-0 bottom-0 mb-5 me-3">
      <div className="mb-2">
        <i
          disabled={isFirstPage}
          id="up"
          onClick={() => {
            handleNavigation('up');
          }}
          className={`fa-solid fa-circle-arrow-up fa-2x ${
            !isFirstPage ? 'hand' : 'text-muted'
          }`}
        ></i>
      </div>
      <div>
        <i
          disabled={isLastPage}
          id="down"
          onClick={() => {
            handleNavigation('down');
          }}
          className={`fa-solid fa-circle-arrow-down fa-2x ${
            !isLastPage ? 'hand' : 'text-muted'
          }`}
        ></i>
      </div>
    </div>
  );
};

export default NavArrows;
