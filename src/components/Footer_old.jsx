// import React from 'react'

import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#474E68',color:'white',p:3}}>
        <Box sx={{m:3, "& svg":{
            fontSize:'60px',
            cursor:'pointer',
            mr:2
        },
        "& svg:hover":{
            color: 'darkcyan',
            transform:'translateX(3px)',
            transition:'all 400ms ease out'
        }
        }}>
            <InstagramIcon/>
            <FacebookIcon/>
        </Box>
        <Typography variant='h5' sx={{
            '@media (max-width:600px)':{
                fontSize:'1rem',
            },
            }}>
            All Rights Reserved TrustCure<sup>&copy;</sup>
        </Typography>
    </Box>
    </>
  )
}

export default Footer