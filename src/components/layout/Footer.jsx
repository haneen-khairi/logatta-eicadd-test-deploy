import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import logoFooter from "../../../public/assets/images/logo-main.png"
import Image from 'next/image'
import Link from 'next/link'
import { buttonContact, buttonFooterList, contactIconFooter, styleIconFooter } from './style'
import { faceIcon, instaIcon, location, messageIcon, phoneIcon, snapIcon, twitterIcon, youtubeIcon } from '@/Svgs'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useTranslation } from "react-i18next";
const Icons = [
    { id: 1, icon: faceIcon, url: 'https://www.facebook.com/eid4add' },
    { id: 2, icon: instaIcon, url: 'https://x.com/eic4add' },
    { id: 3, icon: twitterIcon, url: 'https://www.instagram.com/eic4add/' }, 
]

const Footer = () => {
    const {t} = useTranslation()
    const theme = useTheme()
    const mobile = useMediaQuery(theme.breakpoints.down('sm'));

    const listLinks = [
        { id: 1, name: t("home"), url: '/' },
        { id: 4, name: t("galleries"), url: '/gallery' }, 

    ]
    const listLinks2 = [ 
        { id: 2, name: t("about_us"), url: '/about' },
        { id: 3, name: t("contact_us"), url: '/contact-us' },

    ]
    const contactInfo = [
        { id: 1, title: 'رقم الهاتف', content: '0779308282 | 0585260608', url: "tel: 0779308282", icon: phoneIcon },
        { id: 2, title: 'أرسل لنا بريدًا إلكترونيًا', content: "info@eicadd.com", url: "mailto:info@eicadd.com", icon: messageIcon },
        // { id: 3, title: 'العنوان الرئيسي', content: 'الجناح رقم 510، المبنى رقم 224 (مركز القدس)، وصفي التل، خلدا، عمان، الأردن', url: "#", icon: location },
    ]
    return (
        <>
            <Box sx={{ backgroundColor: "#621493", mt: "1.5rem" }}>
                <Container>
                    <Grid container spacing={{ xs: 1.2, md: 3 }} py="1rem">
                        <Grid item xs={12} sm={12} md={2}>
                            <Stack spacing={{ xs: 1.2, md: 3 }} display='flex' justifyContent='center' alignItems='center'>
                                <Image
                                    src={logoFooter}
                                    alt="b-right logo"
                                    width={mobile ? 120 : 150}
                                    height={100}
                                />
                          
                            </Stack>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Stack spacing={1}>
                                {/* <Typography variant="h4" color="common.white">روابط سريعة</Typography> */}
                                {listLinks.map((item) => (
                                    
                                    <Button LinkComponent={Link} href={item.url} key={item.id} sx={{ ...buttonFooterList, textTransform: "capitalize" }} startIcon={<PlayArrowIcon sx={{ color: "common.white" }} fontSize='small' />}>
                                        {item.name}
                                    </Button> 
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <Stack spacing={1}>
                                {/* <Typography variant="h4" color="common.white">روابط سريعة</Typography> */}
                                {listLinks2.map((item) => (
                                    
                                    <Button LinkComponent={Link} href={item.url} key={item.id} sx={{ ...buttonFooterList, textTransform: "capitalize" }} startIcon={<PlayArrowIcon sx={{ color: "common.white" }} fontSize='small' />}>
                                        {item.name}
                                    </Button> 
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                            <Stack spacing={2}>
                                {/* <Typography variant="h4" color="common.white">معلومات الاتصال</Typography> */}
                                {contactInfo.map((item, index) => (
                                    <Box key={item.id}>
                                        <Stack direction='row' spacing={1.5} mt=".7rem">
                                            <Box sx={contactIconFooter}>
                                                {item.icon}
                                            </Box>
                                            {index == 2 ?
                                                <Typography variant="body1" color="initial" sx={{ ...buttonContact, color: "common.darkGray", textTransform: "uppercase" }}>{item.content}</Typography>
                                                :
                                                <Button LinkComponent={Link} href={item.url} sx={{ ...buttonContact }} >
                                                    {item.content}
                                                </Button>
                                            }
                                        </Stack>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="body1" sx={{ color: "common.darkGray" }}>
                                   
                                    {t("text_footer")}
                                </Typography>
                            
                                <Box sx={{ display: 'flex' , mt:'2rem' }}>
                                    {Icons.map((item) => (
                                        <Button LinkComponent={Link} href={item.url} sx={{ minWidth: 'fit-content' }} key={item.id}>
                                            <Box
                                                sx={styleIconFooter}
                                            >
                                                {item.icon}
                                            </Box>
                                        </Button>
                                    ))}
                                </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default Footer