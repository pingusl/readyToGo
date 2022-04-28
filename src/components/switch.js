const Switch = ({ switchvalue, setSwitch }) => {
  return (
    <div className="row">
      <button
        className="switch-on"
        onClick={() => {
          setSwitch(false);
        }}
        style={{ background: switchvalue === true ? "#5c48d3" : "white" }}
        {...{ color: switchvalue === true ? "white" : "#5c48d3" }}
      >
        <span className="on">ON</span>
      </button>
      <button
        className="switch-off"
        onClick={() => {
          setSwitch(true);
        }}
        style={{ background: switchvalue === false ? "#5c48d3" : "white" }}
        {...{ color: switchvalue === false ? "white" : "#5c48d3" }}
      >
        <span className="off">OFF</span>
      </button>
    </div>
  );
};
export default Switch;
