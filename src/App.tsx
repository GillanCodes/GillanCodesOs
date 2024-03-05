import React, { ReactNode, useEffect, useState } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';
import DesktopIcon from './Components/DesktopIcon';

function App() {

  const test:ReactNode = <div><p>Test</p></div>;
  const [wState, setwState] = useState(["default"]);
  const [focused, setFocused] = useState<string>('');

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
  
  const frameop:WindowOptions = {
    height: 500,
    width:500,
    maxHeight: 900,
    maxWidth: 1900,
    minHeight: 400,
    minWidth: 400,
    x: 100,
    y: 100
  }

  return (
	<div className="App">
    
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test1", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"a"}} />
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test2", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"b"}}/>
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test3", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"c"}}/>
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test4", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"d"}}/>
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test5", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"e"}}/>
    <DesktopIcon focused={focused} setFocused={setFocused} options={{title:"Test6", icon:"https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-5.png", id:"f"}}/>

    
    <button onClick={() => handleWindows("test")}></button>
    
    {wState.includes("test") && (
      <Window child={test} title={"test1"} wOptions={wop} id={"test"} handleWindows={handleWindows} />
    )}
  


	</div>
  );
}

export default App;
