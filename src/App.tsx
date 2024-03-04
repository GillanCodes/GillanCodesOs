import React, { ReactNode, useEffect, useState } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';

function App() {

  const test:ReactNode = <div><p>Test</p></div>;

  const [wState, setwState] = useState(["default"]);

  const handleWindows = (id:string) => {
    
    if (wState.includes(id))
    {
      setwState(w => w.filter(item => item !== id));
    }
    else
    {
      setwState([...wState, id]);
    };
  } 

  const wop:WindowOptions = {
    height: 200,
    width:200,
    maxHeight: 600,
    maxWidth: 600,
    minHeight: 100,
    minWidth: 100,
    x: 100,
    y: 100
  }

  return (
	<div className="App">
    
    <button onClick={() => handleWindows("test")}></button>
    <button onClick={() => handleWindows("test2")}></button>
    
    {wState.includes("test") && (
      <Window child={test} wOptions={wop} id={"test"} handleWindows={handleWindows} />
    )}
    
    {wState.includes("test2") && (
      <Window child={test} wOptions={wop} id={"test2"} handleWindows={handleWindows} />
    )}


	</div>
  );
}

export default App;
