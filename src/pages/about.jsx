import HeroPages from '@/components/shared/HeroPages'
import React from 'react'
import img from "../../public/assets/images/banner.jpg"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Image from 'next/image';



const About = () => {
  return (
    <>
        <HeroPages
            links={[
            {id: 1, url: '/', name: "الرئيسيه"},
            {id: 2, url: '#', name: "من نحن"},
            ]}
            title="من نحن"
            img={img}
        />
        <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
                <Box sx={{height:{xs:"20rem",sm:"30rem",lg:"35rem"}, position:"relative", my:'1rem'}} display='flex' justifyContent='center'>
                <Image
                    src='/assets/images/gallery/24.jpeg'
                    alt="about"
                    layout='responsive'
                    height={90}
                    width={90}
                    loading='lazy'
                    style={{objectFit:"contain"}}
                    />

                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stack >
                    <Typography variant="h3" color="#621493" mb="1rem">واحده من افضل العيادات المتخصصه ف التوحد</Typography>
                    <Typography variant="h6" color="initial">
                        مركزنا للتوحد هو مركز متخصص يقدم خدمات شاملة للأشخاص المصابين بالتوحد وعائلاتهم. نحن ملتزمون بتقديم أعلى مستويات الرعاية والدعم لمساعدة الأفراد في تحقيق أقصى إمكانياتهم وتطوير مهاراتهم الاجتماعية والتعليمية.
                        <br />

                        تشمل خدماتنا تقييماً شاملاً للاحتياجات الفردية، ووضع برامج علاجية مخصصة تتناسب مع احتياجات كل فرد، بالإضافة إلى تقديم الدعم للعائلات من خلال توفير النصائح والموارد التعليمية.
                        <br />
                        يتميز مركزنا بفريق متخصص من الأطباء والمتخصصين في مجال التوحد الذين يعملون بتفانٍ لتقديم أفضل الخدمات والرعاية. تتسم بيئتنا بالاحترافية والدفء، حيث يمكن للأفراد الشعور بالأمان والاستقرار أثناء استكشاف قدراتهم وتحقيق أهدافهم.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default About