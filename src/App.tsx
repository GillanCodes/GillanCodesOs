import React, { ReactNode, useEffect, useState } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';
import DesktopIcon from './Components/DesktopIcon';
import MyComputer, { McOp } from './Components/Windows/MyComputer';
import MyProjects, { MpOp } from './Components/Windows/MyProjects';

function App() {

  const [wState, setwState] = useState(["mycomputer", "projects"]);
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
      <div className="icons">
        <DesktopIcon 
          click={() => handleWindows("mycomputer")} 
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
        
        
        <DesktopIcon 
          click={() => handleWindows("projects")} 
          focused={focused} 
          setFocused={setFocused} 
          options={
            {
              title:"My Projects", 
              icon:`/icons/directory.png`, 
              id:"projects"
            }
          }
        />
        
        <DesktopIcon 
          click={null} 
          focused={focused} 
          setFocused={setFocused} 
          options={
            {
              title:"Discord", 
              icon:`/icons/discord.png`, 
              id:"discord"
            }
          }
        />


      </div>  


      {wState.includes("mycomputer") && (
        <Window 
          child={<MyComputer />} 
          title={"My Computer"} 
          wOptions={McOp} 
          id={"mycomputer"} 
          handleWindows={handleWindows} 
        />
      )}
      
      {wState.includes("projects") && (
        <Window 
          child={<MyProjects />} 
          title={"My Projects"} 
          wOptions={MpOp} 
          id={"projects"} 
          handleWindows={handleWindows} 
        />
      )}
    

      <div className="start-bar">
        <button>Start</button>
      </div>

    </div>
  );
}

export default App;
