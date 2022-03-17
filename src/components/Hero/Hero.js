import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/img1.jpg';
import { Menu, FastFood, FoodBank } from '../icons/MenuIcons';

const Wrapper = styled.div`
    padding: 0;
    width: 100%;
    height: 18rem;
    background: url(${Image});
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
`;
const Circle1 = styled.div`
    background: red;
    position: relative;
    height: 75px;
    width: 75px;
    margin-top: 75px;
    border-radius:50%;
    border: 1px solid white ;
    transition: 0.3s;

    :hover {
      opacity: .5;
    }
`;
const CircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 25px;

`;

const BackgroundText = styled.h2`
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 20px;
    font-family: 'Satisfy', cursive;
    font-size: 30px;
    text-align:center ;
`

const Hero = () => {
  return (
    <Wrapper>
      <CircleWrapper>
        <Circle1>
          <Menu />
        </Circle1>
        <Circle1>
          <FastFood />
        </Circle1>
        <Circle1>
          <FoodBank />
        </Circle1>
      </CircleWrapper>
      <BackgroundText>
        Redefining how you prepare your meal...
      </BackgroundText>
    </Wrapper>
  )
}

export default Hero