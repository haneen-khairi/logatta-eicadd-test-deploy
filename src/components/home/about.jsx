import { Box, Grid, Typography, Container, useMediaQuery } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import { useTheme } from '@emotion/react';



const About = () => {
    const theme = useTheme()
    const mobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const data = [
        {
            id: 1,
            title: "فريق عمل محترف",
            content: "المركز الوحيد المتخصص في التدخل المبكر للأطفال ذوي التوحد والاضطرابات التنموية.",
            icon: <Diversity3Icon style={{
                opacity: ".3",
                fontSize: mobileView ? '30px': "50px"
            }} />
        },
        {
            id: 2,
            title: "الرعاية الصحية عن بعد ",
            content: "موعد افتراضي مع المتخصصين في جامعة ييل وهارفارد وفريق محلي من الأطباء والمعالجين المهنيين ومعالجي النطق وغيرهم. ",
            icon: <PersonalVideoIcon style={{
                opacity: ".3",
                fontSize: mobileView ? '30px': "50px"
            }} />
        },
        {
            id: 3,
            title: "التقييم والتشخيص والعلاج",
            content: "مركز مجهز بمنطقة تدخل وعيادة للأطفال.",
            icon: <MedicationLiquidIcon style={{
                opacity: ".3",
                fontSize: mobileView ? '30px': "50px"
            }} />
        },
        {
            id: 4,
            title: "استشر فريقنا",
            content: "قم بحجز استشارة الفحص والتقييم مع أحد المتخصصين لدينا",
            icon: <CalendarMonthIcon style={{
                opacity: ".3",
                fontSize: mobileView ? '30px': "50px"
            }} />
        }
    ]
    return (
        <Container sx={{ marginTop: {xs:'2rem',md:"-8.5rem",}, zIndex: "9", position: "relative" }}>
            <Box >
                <Grid container spacing={{ xs: 1.5, md: 4 }} pt={{ xs: "0", sm: "2rem" }} pb={{ xs: "1.5rem", sm: "3rem" }} justifyContent="center">
                    {data.map((item) => (
                        <Grid item xs={6} sm={6} md={3} key={item.id}>
                            <Box sx={{
                                backgroundColor: "#621493", height: '100%',
                                padding: '20px',
                                borderRadius: ' 10px',
                                position: "relative",
                                paddingBottom: "3.4rem"
                            }}>
                                <Typography mb={{xs:1, md:3}} variant='h5' color='#fff' fontWeight={600} sx={{ textAlign: "center", paddingInlineStart: "15px" }}>
                                    {item.title}
                                </Typography>
                                <Typography variant='p' color='#fff' fontWeight={400} sx={{ textAlign: "center", paddingInlineStart: "15px" }}>
                                    {item.content}
                                </Typography>
                                <Box style={{
                                    position: 'absolute',
                                    bottom: "0",
                                    right: "10px",

                                    color: "#fff",
                                }}>
                                    {item?.icon}

                                </Box>
                            </Box>
                        </Grid>
                    ))}

                </Grid>
            </Box>
        </Container >
    )
}

export default About