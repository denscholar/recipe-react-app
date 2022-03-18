import React from 'react';
import Hero from '../../components/Hero/Hero';
import Imageslider from '../../components/Imageslider/Imageslider';
import RecipeList from '../../components/RecipeList/RecipeList';

const Home = () => {  
  return (
    <div>
        <Hero />
        <h1>Trending Recipes</h1>
        <Imageslider />
        <RecipeList />
    </div>
  )
}

export default Home