import React, { ReactNode, useEffect, useState } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';
import DesktopIcon from './Components/DesktopIcon';
import Test, { tOp } from './Components/Windows/Test';

function App() {

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

    clearSelection();
  } 

  const clearSelection = () => {
    setFocused('');
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
      
      <DesktopIcon 
        click={null} 
        focused={focused} 
        setFocused={setFocused} 
        options={
          {
            title:"My Documents", 
            icon:`/icons/mydocs.png`, 
            id:"mydocs"
          }
        }
      />
      
      <DesktopIcon 
        click={null} 
        focused={focused} 
        setFocused={setFocused} 
        options={
          {
            title:"GillanCodes Explorer", 
            icon:`/icons/world.png`, 
            id:"gcexp"
          }
        }
      />
      
      <DesktopIcon 
        click={null} 
        focused={focused} 
        setFocused={setFocused} 
        options={
          {
            title:"Recycle Bin", 
            icon:`/icons/recycle_bin.png`, 
            id:"trash"
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
