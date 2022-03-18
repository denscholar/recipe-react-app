import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 5vw);
    /* grid-gap: 1.5rem; */
    
`

const Container = styled.div`
    height: 15rem;
    

`

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    const fetchRecipe = async () => {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=%22chicken%22%2C%20%22salad%22&app_id=5abb86d8&app_key=05efb931f11c66c1391a6bd02f9438d9');
        const data = await response.json()
        // setRecipeList(data.hits);
        console.log(data.hits);
    }

    useEffect(() => {
        fetchRecipe();
    }, [])
  return (
    <>
        {recipeList.map((list) => {
            return (
                <>
                {list.recipe.label}
                </>
            )
        })}
    </>
  )
}

export default RecipeList