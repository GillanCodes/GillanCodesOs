import React, { ReactNode } from 'react';
import "./Styles/index.css";
import Window, { WindowOptions } from './Components/Window';

function App() {

  const test:ReactNode = <div><p>Test</p></div>;

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
    <Window child={test} wOptions={wop} />
	</div>
  );
}

export default App;
