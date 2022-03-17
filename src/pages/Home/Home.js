import React from 'react';
import Hero from '../../components/Hero/Hero';
import Imageslider from '../../components/Imageslider/Imageslider';

const Home = () => {  
  return (
    <div>
        <Hero />
        <h1>Trending Recipes</h1>
        <Imageslider />
    </div>
  )
}

export default Home