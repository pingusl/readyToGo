import { useState } from "react";

import Switch from "./switch";

const Main = ({ switchvalue, setSwitch }) => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <main className="main">
      <div className="col1">
        <Switch switchvalue={switch1} setSwitch={setSwitch1} />
        <Switch switchvalue={switch2} setSwitch={setSwitch2} />
        <Switch switchvalue={switch3} setSwitch={setSwitch3} />
      </div>
      <div className="col2">
        <div className="ligth-authorization">
          <span className="authorization"></span>
        </div>
      </div>
    </main>
  );
};
export default Main;
