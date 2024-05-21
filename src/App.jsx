import React from 'react';
import FluidSimulation from './Components/FluidSimulation';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Rating from './Components/Rating';
import MagicWand from './Components/MagicWand';
import ApplySection from './Components/ApplySection';
import SupportedBorwsers from './Components/SupportedBorwsers';
import AllRound from './Components/AllRound';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='w-full h-full relative z-10'>
      
      <FluidSimulation style={{zIndex: -1}} /> 
      <Navbar />
      <Hero/>  
      <Rating/>
      <MagicWand/>
      <ApplySection/>
    <SupportedBorwsers/>
    <AllRound/>
    <Footer/>
  
      
    </div>
    
  );
};

export default App;