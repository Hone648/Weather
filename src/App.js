import React from 'react';
import './App.css';
import Card from './components/weathercard/component';

function App() {
  return (
    <div className="App">
      <Card temp='28'/>
    </div>
  );
}

export default App;
