import { useState } from "react";

const Main = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <main className="main">
      <div className="col1">
        <div className="row">
          <button className="switch-on">
            <span className="on">ON</span>
          </button>
          <button className="switch-off">
            <span className="off">OFF</span>
          </button>
        </div>
        <div className="row">
          <button className="switch-on">
            <span className="on">ON</span>
          </button>
          <button className="switch-off">
            <span className="off">OFF</span>
          </button>
        </div>
        <div className="row">
          <button className="switch-on">
            <span className="on">ON</span>
          </button>
          <button className="switch-off">
            <span className="off">OFF</span>
          </button>
        </div>
      </div>
      <div className="col2">
        <div className="ligth">
          <span className="autorisation"></span>
        </div>
      </div>
    </main>
  );
};
export default Main;
