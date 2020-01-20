import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './route/Route';
import Confirmation from './component/Confirmation';

function App() {
  return (
    <div className="App">
      <h1>ProHire</h1>
      <BrowserRouter>
        <Routes/>
        <Confirmation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
