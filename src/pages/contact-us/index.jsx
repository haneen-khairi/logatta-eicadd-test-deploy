import HeroPages from '@/components/shared/HeroPages'
import React, { useState } from 'react'
import img from "../../../public/assets/images/about-left.png"
import aboutImg from "../../../public/assets/images/about-left.png"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Image from 'next/image';
import CustomInput from '@/components/controls/custom-input'
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Link from 'next/link'


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const schema = yup
    .object({
        fullName: yup.string().required("هذا الحقل مطلوب"),
        phone: yup.number().required("هذا الحقل مطلوب"),
        subject: yup.string().required("هذا الحقل مطلوب"),
        message: yup.string().required("هذا الحقل مطلوب"),
        email: yup
        .string()
        .email("يرجى اتباع تنسيق البريد الإلكتروني")
        .required("هذا الحقل مطلوب"),
        })
    .required();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const onSubmit = data => {
    setLoading(true);
    console.log(date)
    toast.success("uiutyutyu");
  };
  return (
    <>
        <HeroPages
            links={[
            {id: 1, url: '/', name: "الرئيسية"},
            {id: 2, url: '#', name: "تواصل معنا"},
            ]}
            title="تواصل معنا"
            img={img}
        />
        <Container maxWidth="lg">
        <Grid container spacing={4} my={{xs:"1.5rem",sm:"3rem"}}>
            <Grid item xs={12} sm={4} sx={{display:"grid", pt:"0 !important"}}>
                <Box sx={{backgroundColor:"#f1f1f5", p:"2rem"}}>
                    <Typography variant="h2" color="#621493" mb="1rem">عنوان مكتبنا</Typography>
                    <Typography variant="h4" color="initial">فرع الاردن :</Typography>
                    <a 
  href="https://maps.app.goo.gl/TMJpMDjtJif9Zj76A" 
  target="_blank" 
  rel="noreferrer"
>
 <Typography variant="body1" color="#621493">
<br/>
 🇯🇴  ٢٢٤ شارع وصفي التل-خلدا-مجمع القدس -الطابق الخامس-مكتب ١٠
 <br/>
 </Typography>         
</a>
                    <Typography variant="h4" color="initial" mt="1rem">فرع الامارات :</Typography>
                    <Typography variant="body1" color="initial">🇦🇪 عجمان-منطقه الروضه- فيلا رقم ١-شارع التله-بالقرب من مركز امن الحميديه
                  
                    </Typography>

                    <Typography variant="h4" color="initial" mt="1rem">تحدث معنا :</Typography>
                    <Typography variant="body1" color="initial">
                        البريد الإلكتروني : 
                        <Button LinkComponent={Link} href="mailto:info@eicadd.com"  >
                            info@eicadd.com
                        </Button>
                    </Typography>
                    <Typography variant="body1" color="initial">
                        رقم الهاتف : 
                        <Button LinkComponent={Link} href="tel: 0779308282" >
                            0779308282 | 0585260608
                        </Button>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={8} sx={{border: {xs: "0",sm:"1px solid #f1f1f5"}, borderLeft:"0", p:{xs:"0",sm:"2rem"},display:"grid"}}>
            <Box
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit(onSubmit)}
                component='form'
                mt={{xs:"0",sm:3}}
            >
                <Typography variant="h3" color="#621493" textAlign="center">نحن نحب أن نسمع منك</Typography>
                <Typography variant="body1" color="initial" textAlign="center">الرجاء الاتصال بنا عبر البريد الإلكتروني أو استخدام نموذج الاتصال، وسنكون سعداء بمساعدتك.</Typography>
                <Grid container spacing={{ xs: 1.5, md: 4 }} pt={{xs:"0", sm:"2rem"}} pb={{xs:"1.5rem", sm:"3rem"}} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="الاسم بالكامل"
                            register={register}
                            name='fullName'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='text'
                            id='fullName'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="البريد الإلكتروني"
                            register={register}
                            name='email'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='email'
                            id='email'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="رقم الهاتف"
                            register={register}
                            name='phone'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='number'
                            id='phone'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CustomInput
                            label="الموضوع"
                            register={register}
                            name='subject'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='text'
                            id='subject'
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomInput
                            label="الرساله"
                            register={register}
                            name='message'
                            errors={errors}
                            touchedFields={touchedFields}
                            type='text'
                            id='message'
                            otherProps={{
                                multiline: true,
                                maxRows: 12,
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <LoadingButton
                            loading={loading}
                            type='submit'
                            variant='contained'
                            sx={{ width:"100%",py:".7rem",backgroundColor:"#621493", "&:hover":{backgroundColor:"#5c466a", color:"common.white"}}}
                        >
                            إرسال رسالة
                        </LoadingButton>
                    </Grid>
                </Grid>
            </Box>
            </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default Contact