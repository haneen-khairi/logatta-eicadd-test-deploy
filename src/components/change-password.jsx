import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import CustomInput from "@/components/controls/custom-input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import AuthApiEndpoints from "@/services/auth/api";

function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const schema = yup.object().shape({
      password: yup.string().required("هذا الحقل مطلوب"),
      password_confirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'كلمات المرور غير متطابقة')
        .required("هذا الحقل مطلوب"),
    });
  
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
      formData.append('phone', data.phone);
      formData.append('password_confirmation', data.password_confirmation);
      return AuthApiEndpoints.changePassword(data)
        .then(() => {
          toast.success('تم تغيير كلمه المرور بنجاح');
          reset()
        })
        .catch((error) => {
          setLoading(false);
  
          toast.error("من فضلك راجع البيانات مره اخري");
        });
    };
  return (
    <Grid item xs={12} sm={5}>
    <Box
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      component="form"
    >
      <Stack>
        <Typography
          pb="1.3rem"
          variant="h5"
          sx={{ margin: "auto", maxWidth: { md: "80%" } }}
          textAlign="center"
          color="#621493"
          mb="1rem"
        >
          تغيير الرقم السري
        </Typography>
        <Grid
          container
          spacing={{ xs: 1.5, md: 4 }}
          pt={{ xs: "0", sm: "2rem" }}
          pb={{ xs: "1.5rem", sm: "3rem" }}
          justifyContent="center"
        >
     

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

          <Grid item xs={12} md={12}>
            <CustomInput
              label="تاكيد الرقم السري"
              register={register}
              name="password_confirmation"
              errors={errors}
              touchedFields={touchedFields}
              type="password"
              id="password_confirmation"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
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
             تاكيد
            </LoadingButton>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  </Grid>
  )
}

export default ChangePassword