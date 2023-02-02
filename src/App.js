import { useState } from "react";
//import Item from './Components/Item/Item'

function App() {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div className="box" style={{backgroundColor: toggle ? "salmon" : "lightgreen"}}></div>
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
