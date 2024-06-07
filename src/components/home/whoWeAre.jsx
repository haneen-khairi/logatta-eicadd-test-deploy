import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import img1 from '../../../public/assets/images/home-image.jpg';
import Image from 'next/image';
import { useTranslation } from "react-i18next";
export default function WhoWeAre() {
    const {t} = useTranslation()
    return (
        <Container>
            <Grid container spacing={{ xs: 1.5, md: 4 }} pt={{ xs: "0", sm: "2rem" }} pb={{ xs: "1.5rem", sm: "3rem" }} justifyContent="center">


                <Grid item xs={12} sm={6}>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} sx={{ height: "100%" }}>
                        <Typography variant='h4' color='primary.main' fontWeight={600} >
                      {t('text_5')}
                       </Typography>

                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Image
                        src={img1}
                        alt='hero'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
                        style={{ objectFit: 'cover', width: '100%', height: '100%', transform: 'scaleX(-1)', borderRadius:"10px" }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
