import React, { ReactNode } from 'react';
import "./Styles/index.css";
import Window from './Components/Window';

function App() {

  const test:ReactNode = <div><p>Test</p></div>;

  return (
	<div className="App">
    <Window child={test} />
	</div>
  );
}

export default App;
