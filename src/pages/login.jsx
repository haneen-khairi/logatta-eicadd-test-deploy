import HeroPages from "@/components/shared/HeroPages";
import React, { useContext, useState } from "react";
import img from "../../public/assets/images/service-bg.jpeg";
import loginImg from "../../public/assets/images/login.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { LoadingButton } from "@mui/lab";
import CustomInput from "@/components/controls/custom-input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import AuthApiEndpoints from "@/services/auth/api";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { UserData } from "@/context/UserProvider";
import bgImage from "../../public/assets/images/gallery/16.jpeg";
import { useTranslation } from "react-i18next";
const Login = () => {
  const {t} = useTranslation()
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setProfileData } = useContext(UserData);

  const schema = yup
    .object({
      phone: yup.string().required("هذا الحقل مطلوب"),
      password: yup.string().required("هذا الحقل مطلوب"),
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
    mode: "all",
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("phone", data.phone);
    formData.append("password", data.password);
    return AuthApiEndpoints.login(data)
      .then((res) => {
        Cookies.set("token", res?.data?.token);
        setProfileData(res?.data?.user);
        reset();
        router.push("/");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("من فضلك راجع البيانات مره اخري");
      });
  };

  return (
    <>
      {/* <HeroPages
        links={[
          { id: 1, url: "/", name: "الرئيسية" },
          { id: 2, url: "#", name: "تسجيل الدخول" },
        ]}
        title="تسجيل الدخول"
        img={img}
      /> */}
      <Box
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px", 
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            my={3}
            justifyContent="space-between"
          >
            <Grid item xs={12} sm={3}></Grid>
            <Grid item xs={12} sm={6}>
              <Box
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
                component="form"
              >
                <Stack
                  sx={{
                    background: "#ffffffe8",
                    padding: "60px 20px 40px 20px",
                    borderRadius: "8px",
                  }}
                >
                  <Typography
                    pb="1.3rem"
                    variant="h5"
                    sx={{ margin: "auto", maxWidth: { md: "80%" } }}
                    textAlign="center"
                    color="#621493"
                    mb="1rem"
                  >
                    الرجاء تسجيل الدخول للوصول إلى خدماتنا المتخصصة والشخصية.
                    نحن هنا لتقديم الدعم والرعاية لك ولعائلتك
                  </Typography>
                  <Grid
                    container
                    spacing={{ xs: 1.5, md: 4 }}
                    pt={{ xs: "0", sm: "2rem" }}
                    pb={{ xs: "1.5rem", sm: "3rem" }}
                    justifyContent="center"
                  >
                    <Grid item xs={12} md={12}>
                      <CustomInput
                        label="رقم الهاتف"
                        register={register}
                        name="phone"
                        errors={errors}
                        touchedFields={touchedFields}
                        type="number"
                        id="phone"
                        sx={{ 
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                      <CustomInput
                        label="الرقم السري"
                        register={register}
                        name="password"
                        errors={errors}
                        touchedFields={touchedFields}
                        type="password"
                        id="password"
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <LoadingButton
                        loading={loading}
                        type="submit"
                        variant="contained"
                        sx={{
                          width: "100%",
                          py: ".7rem", 
                          backgroundColor: "#621493",
                          "&:hover": {
                            backgroundColor: "#5c466a",
                            color: "common.white",
                          },
                        }}
                      >
                       {t("text_13")}
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Login;
