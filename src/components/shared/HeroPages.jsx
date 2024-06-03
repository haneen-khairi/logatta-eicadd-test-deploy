import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Breads from './Breads'

const HeroPages = ({links, title, desc, img}) => {
  return (
    <Box sx={{background: `url(${img.src})`, backgroundSize: "cover",height:{xs:"6rem",sm:"14rem",lg:"16rem"},width:"100%",position:"relative", backgroundRepeat: "no-repeat"}}>
        <Container sx={{height:"100%"}}>
            <Stack justifyContent="center" height="100%" spacing={2}>
                <Typography variant="h1" color="#621493" sx={{textTransform:"capitalize"}}>{title}</Typography>
                <Breads links={links} />
            </Stack>
        </Container>
    </Box>
  )
}

export default HeroPages