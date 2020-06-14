import React from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imagelinkform/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number: {
    value: 30,
    density: {
      enable: true,
      area: 400,
      }
    }
  }
}



function App() {
  return (
    <div className="App">
        <Particles params={particleOptions} className='particle'/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
