import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5rem;
    
`

const Container = styled.div`
    height: 5rem;
    width: 2.5rem;
    gap: 10rem;

    img{
        width: 12rem;
        /* height: 100%; */
    }
    

`

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    const fetchRecipe = async () => {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=%22chicken%22%2C%20%22salad%22&app_id=5abb86d8&app_key=05efb931f11c66c1391a6bd02f9438d9');
        const data = await response.json()
        setRecipeList(data.hits);
        console.log(data.hits);
    }

    useEffect(() => {
        fetchRecipe();
    }, [])
  return (
    <Wrapper>
        {recipeList.map((recipe) => {
            return <Container>
                <img src={recipe.recipe.image} alt="" />
            </Container>

        })}
    </Wrapper>
  )
}

export default RecipeList