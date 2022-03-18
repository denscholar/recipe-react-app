import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const Wrapper = styled.div`
    margin: 2rem 0;
`

const Card = styled.div`
    min-height: 10rem;
    overflow: hidden;
    position: relative;
    border-radius: 2rem;
    img{
        width: 15rem;
        border-radius: 2rem;
    }
`

const Title = styled.p`
    position: absolute;
    font-size: 10px;
    text-align: left;
    padding: 7px;
    font-weight: 400;
    color: white;
    background: black ;
    bottom: 10px;
    border-top-right-radius:1.5rem;
    border-bottom-right-radius:1.5rem;
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width:100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0,0,0,0.8));
`
const Imageslider = () => {

    const [favourites, setFavourites] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=%22chicken%22%2C%20%22salad%22&app_id=5abb86d8&app_key=05efb931f11c66c1391a6bd02f9438d9');
        const data = await response.json()
        setFavourites(data.hits);
        // console.log(data.hits);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <Wrapper>
                <Splide options={{
                    perPage: 5,
                    pagination: false,
                    drag: 'free',
                    gap: '10px',
                    autoplay: true,
                }}>
                    {favourites.map((hit) => {
                        return (
                            <>
                                <SplideSlide>
                                    <Card>
                                        <Title>{hit.recipe.label}</Title>
                                        <img src={hit.recipe.image} alt={hit.recipe.label} />
                                        <Gradient />
                                    </Card>
                                </SplideSlide>
                            </>

                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

export default Imageslider