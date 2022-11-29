import React, { useState } from 'react'
import Food from './FoodData'
import FoodCard from './FoodCard'
import { Container } from '@mui/material'

const RestaurantMenu = ({handleClick}) => {

  return (
    <Container style={{marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {Food.map(product => (
            <FoodCard key={product.id} product={product} handleClick={handleClick} />
          ))}  
    </Container>
  )
}

export default RestaurantMenu