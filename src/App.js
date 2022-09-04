import './App.css';
import { useState } from 'react';
import Oscillator from './components/oscillator';

function App() {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return (
    <div className="App">
      <Oscillator freq="440" type="square" ctx={audioCtx} oscCount="1"></Oscillator>
    </div>
  );
}

export default App;
