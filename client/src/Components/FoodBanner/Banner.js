import React from 'react'
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Orderboy from '../../Images/Orderboy.png';
import { red } from '@mui/material/colors';


function Banner() {
  return (
    <div> 
        <Box
        sx={{
            width: '100%',
            height: '100vh',
            pt:'20%',
            bgcolor:'red',
          
            
          }}
        >
            <Typography variant='h5' >
          Easy way to make an order
        </Typography>
        <Typography variant='h3' mb={20} >
          HUNGRY? just wait
          food at your door
        </Typography>
        <Button variant="contained" >Order now</Button>
        <Button variant="outlined">See all foodes</Button>
        

        </Box>
        
        {/* <div>
        <img src='Orderboy.png' height="300px" wedth="300px"></img>   
        </div> */}
    </div>
  )
}

export default Banner