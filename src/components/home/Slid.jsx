import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';


const Slider = () => {

  return (
    <Box sx={{ overflow: 'hidden' }}>

      <Box sx={{ height: { xs: '30vh',sm:"50vh" ,md: '90vh' }, position: 'relative', }}>
        <Box sx={{ height: { xs: '50vh', md: '90vh' }, position: 'relative' }}>
          <Image
            src={'/assets/images/gallery/1.jpeg'}
            alt='hero'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
            style={{ objectFit: 'cover' }}
            sx={{ width: '100%', height: '100%' }}
          />
          <Box sx={{ position: 'absolute', top: {xs:'30%',sm:'40%',md:'51%'}, left:  {xs:'5%', md:'4%'}, width: {xs:'55%', md:'40%'}}}>
            <Typography variant='h2' color='#150066' fontWeight={800} textAlign={{md:'center'}}>
            اول مراكز تدخل مبكر مدعومة بالذكاء الاصطناعي لتقييم وعلاج التوحد والاضطرابات التطورية
            </Typography>

          </Box>
        </Box>
      </Box>

    </Box >
  );
};

export default Slider;
