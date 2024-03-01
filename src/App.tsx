import React from 'react';
import "./Styles/index.css";
import { Rnd } from 'react-rnd';

function App() {
  return (
	<div className="App">
		<Rnd className='windows'
      bounds="window"
      maxHeight={450}
      maxWidth={450}
      minHeight={200}
      minWidth={200}
    >
      <div style={{height: "100%", width:"100%", backgroundColor:"black"}}></div>
    </Rnd>
	</div>
  );
}

export default App;
