const ProgressBar = ({ progressValue, maxProgress }) => {
  return (
    <div id="pageProgressWrapper" style={{ lineHeight: 0 }}>
      <progress
        max={maxProgress}
        value={progressValue}
        id="pageProgress"
        className="w-100 border-0"
      >
        whatever
      </progress>
    </div>
  );
};

export default ProgressBar;
