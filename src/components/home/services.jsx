import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import img1 from '../../../public/assets/images/home-image.jpg';
import Image from 'next/image';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import { useTranslation } from "react-i18next";


export default function Services() {
    const {t} = useTranslation()
    const data =[
        {id:1, text :t("text_7"),icon: <AcUnitIcon/>},
        {id:2, text: t("text_8"),icon: <BabyChangingStationIcon/>},
        {id:3, text :t("text_9"),icon: <PsychologyIcon/>},
        {id:4, text :t("text_10"),icon: <QueuePlayNextIcon/>},
        {id:5, text :t("text_11"),icon: <FamilyRestroomIcon/>},
        {id:5, text :t("text_12"),icon: <OnlinePredictionIcon/>},
    ]
    return (
        <Box sx={{
            backgroundImage: `url('/assets/images/service-bg.jpeg')`,
            width: '100%',
            height: '100%',
            backgroundAttachment:"fixed",
            backgroundSize:"cover" ,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center center" ,
            position:"relative",
            minHeight:{xs:'230px', md:'230px'},
            width: '100vw',
            marginBottom:"3rem"
    
        }}>
      <Box
        sx={{
            position: 'absolute',
            content: '""',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            backgroundColor: '#621493',
            opacity: 0.8,
        }}
    >


            <Container>
                {/* <Typography textAlign='center' variant='h4' color='primary.main' fontWeight={600} >
                    خدماتنا
                </Typography> */}
                <Grid container spacing={{ xs: 1.5, md: 4 }} pt={{ xs: "0", sm: "2rem" }} py={{ xs: "1.5rem", sm: "3rem" }} >

                {data.map((el)=>(
                    <Grid item xs={6} sm={6} md={4} key={el.id}>
                        <Box display={'flex'} alignItems={'center'} sx={{ height: "100%" }}>
                            <Box sx={{border:"1px solid #fff", color:"#fff", borderRadius:"50%",
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            
                        
                        }}>
                            {el.icon}
                            </Box>
                            <Typography sx={{paddingInlineStart:"10px"}} variant='h4' color='#fff' fontWeight={600} >
                                {el.text}                           
                            </Typography>
                        </Box>
                    </Grid>
                ))}
                </Grid>
            </Container>
            </Box>
        </Box>
    )
}
