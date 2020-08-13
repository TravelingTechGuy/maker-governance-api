import React from 'react';
import Query from './Query';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        MakerDao Governance Subgraph
      </header>
      <div className="App-body">
        <Query query="EXAMPLE" variables={{first: 5}} theme="ocean" />
      </div>
    </div>
  );
}

export default App;
