import React, { useState } from 'react'
import Hotel from './HotelCard'
import Data from './HotelData'
import './HotelDetails.css'

function HotelDetails() {

  return (
    <div className='hotelDetails' id='products'>
        <h2>List Of Hotels near you</h2>
        <div className='hotelinfo'>
        {Data.map(product => (
            <Hotel key={product.id} product={product} />
          ))}  
        </div>

        
    </div>
  )
}

export default HotelDetails