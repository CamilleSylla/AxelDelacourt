import React from 'react';
import './App.css';
import Experience from './Experiences/Experience';
import Formation from './Formation/Formation';
import Intro from './Intro/Intro';



function App() {
  return (
    <div className="App">
      <Intro/>
      <Formation/>
      <Experience/>
    </div>
  );
}

export default App;
