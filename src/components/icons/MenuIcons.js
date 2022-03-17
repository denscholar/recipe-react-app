import React from 'react';
import { LocalDiningOutlined, FastfoodOutlined } from '@material-ui/icons';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';

const Menu = () => {
  return (
    <LocalDiningOutlined style={{
        position: 'absolute',
        top: '30%',
        left:'30%',
        color: 'white',
    }} />
  )
}

const FastFood = () => {
    return (
      <FastfoodOutlined style={{
          position: 'absolute',
          top: '30%',
          left:'30%',
          color: 'white',
      }} />
    )
  }

  const FoodBank = () => {
    return (
      <FoodBankOutlinedIcon style={{
          position: 'absolute',
          top: '30%',
          left:'30%',
          color: 'white',
      }} />
    )
  }
export {Menu, FastFood, FoodBank}