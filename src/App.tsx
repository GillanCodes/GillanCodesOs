import React, { ReactNode, useEffect, useState } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';
import DesktopIcon from './Components/DesktopIcon';
import Test, { tOp } from './Components/Windows/Test';

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

  return (
    <div className="App">
           
      <DesktopIcon 
        click={null} 
        focused={focused} 
        setFocused={setFocused} 
        options={
          {
            title:"My Computer", 
            icon:`/icons/computer_explorer.png`, 
            id:"mycomputer"
          }
        }
      />
      
      {wState.includes("test") && (
        <Window 
          child={<Test />} 
          title={"test1"} 
          wOptions={tOp} 
          id={"test"} 
          handleWindows={handleWindows} 
        />
      )}
    


    </div>
  );
}

export default App;
