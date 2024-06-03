import HeroPages from '@/components/shared/HeroPages'
import React from 'react'
import img from "../../public/assets/images/service-bg.jpeg"
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
            {id: 1, url: '/', name: "الرئيسية"},
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
                    <Typography variant="h3" color="#621493" mb="1rem">
                        اول مراكز تدخل مبكر مدعومة بالذكاء الاصطناعي لتقييم وعلاج التوحد والاضطرابات التطورية في الشرق الأوسط - الرعاية الرائدة في منطقة الشرق الأوسط وشمال أفريقيا للأطفال
                    </Typography>
                    <Typography variant="h6" color="initial">
                        الدكتور نور الدين الديري 
                        <br />
                        هو احد الرواد في مجال التوحد واضطرابات التطور، مشهود له بمساهماته الابتكارية في مجالات الوراثة وعلم الأحياء الجزيئي والذكاء الاصطناعي. حصل على تعليمه من أرقى الجامعات في كندا والولايات المتحدة الأمريكية، حيث طوّر أدوات تشخيصية متقدمة بالذكاء الاصطناعي توفر تقييما مبكرًا ودقيقًا للاضطرابات التطورية، بنسبة دقة مذهلة تصل إلى 99.5%. عمله الرائد مطبق في مراكز إيكاد الأولى من نوعها في الأردن والإمارات وكندا، حيث تُصمم العلاجات المخصصة باستخدام بروتوكولات ذكاء اصطناعي متطورة.

                        تتعدد مساهمات الدكتور الديري إلى تطوير بروتوكولات علاجية ناجحة عالجت تأخرات التطور وأعراض التوحد في آلاف الأطفال حول العالم. بحثه في الأساس الجيني لـ&quot;التوحد المكتسب&quot; يفتح آفاقًا جديدة للعلاجات القابلة للعكس. تدريبه الأكاديمي الصارم والتزامه بالاستفادة من التكنولوجيا لتحسين خطط التدخل للأطفال يؤكدان مكانته كخبير رائد في مجاله، وتوفير الأمل والحلول الواقعية للعائلات على الصعيدين المحلي والعالمي.
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default About
