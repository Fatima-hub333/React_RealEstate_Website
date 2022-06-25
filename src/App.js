import React from 'react';
import Home from './components/First-Section/Home';
import Ourproject from './components/Third-Section/ourprojects';
import MarketingSlider from './components/activities/slider/slider';
import Abouts from './components/Second-Section/about';
import Service from './components/services/services';
import Ourleader from './components/ourleader/ourleaders';
import Leaders from './components/leaders/leaders';
import './App.css';

export default function App() {
  return (
    <div>
      <Home />
      <Ourproject />
      <MarketingSlider />
      <Abouts />
      <Service />
      <Ourleader />
      <Leaders />
    </div>
  );
}
