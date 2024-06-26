import HeroPages from '@/components/shared/HeroPages';
import React from 'react';
import img from "../../public/assets/images/service-bg.jpeg";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

 

const About = () => {
   const { t } = useTranslation();

  return (
    <>
      <HeroPages
        links={[
          { id: 1, url: '/', name: t('home') },
          { id: 2, url: '#', name: t('about_us') },
        ]}
        title={t('title')}
        img={img}
      />
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: { xs: "20rem", sm: "30rem", lg: "35rem" }, position: "relative", my: '1rem' }} display='flex' justifyContent='center'>
              <Image
                src='/assets/images/gallery/24.jpeg'
                alt="about"
                layout='responsive'
                height={90}
                width={90}
                loading='lazy'
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography variant="h3" color="#621493" mb="1rem">
                {t('content_title')}
              </Typography>
              <Typography variant="h6" color="initial">
                {t('content_body')}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
