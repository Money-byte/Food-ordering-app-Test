import React from 'react'
import Food from './FoodData'
import FoodCard from './FoodCard'
import { Container } from '@mui/material'

const RestaurantMenu = () => {
  return (
    <Container style={{marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {Food.map(product => (
            <FoodCard key={product.id} product={product} />
          ))}  
    </Container>
  )
}

export default RestaurantMenu