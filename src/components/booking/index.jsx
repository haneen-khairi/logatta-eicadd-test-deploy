import { UserData } from "@/context/UserProvider";
import { useGetUserBooking } from "@/services/patient/queries";
import {
  Box,
  Card,
  Chip,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import React, {useContext} from "react";

const Booking = () => {
    const {profileData } = useContext(UserData);

  const { data: bookingData, isLoading, isRefetching } = useGetUserBooking(profileData?.id);
  const loading = isLoading || isRefetching;

  return (
    <>
      {loading ? (
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <CircularProgress />
        </Box>
      ) : bookingData?.data?.length > 0 ? (
        bookingData.data.map((el) => (
          <Card key={el?.id} sx={{ px: "1rem", mb: 2, position: "relative" }}>
            <Box
              display="flex"
              sx={{ position: "absolute", top: "10px", right: "10px" }}
            >
              {el?.is_first && (
                <Chip
                  sx={{ backgroundColor: "green", color: "#fff", mx: "1rem" }}
                  label="اول جلسه"
                  variant="outlined"
                />
              )}

              {el?.last && (
                <Chip
                  sx={{ backgroundColor: "red", color: "#fff" }}
                  label="انتهت الجلسه"
                  variant="outlined"
                />
              )}
            </Box>

            <Box
              sx={{
                maxWidth: { md: "60%" },
                marginTop: el?.is_first || el?.last ? { xs: "4rem", md: 0 } : 0,
              }}
            >
              <Stack
                direction="row"
                my={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h6"> الحاله</Typography>
                  <Typography variant="h5" color="#aeaaaa" sx={{ px: 2 }}>
                    {el?.status}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6"> السعر </Typography>
                  <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                    {el.price}
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                my={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h6"> التاريخ</Typography>
                  <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                    {el.date}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography variant="h6"> من-الى </Typography>
                  <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                    {el.from} - {el.to}
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack
                direction="row"
                my={3}
                alignItems="center"
              >
                  <Typography variant="h6">الطبيب المعالج</Typography>
                  <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                    {el?.therapist?.name}
                  </Typography>
              </Stack>

              {el?.note && <Stack
                direction="row"
                my={3}
                alignItems="center"
              >
                  <Typography variant="h6">  ملاحظات </Typography>
                  <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                    {el?.note}
                  </Typography>
              </Stack>}
          </Card>
        ))
      ) : (
        <Typography variant="h6">  لا يوجد مواعيد </Typography>

      )}
    </>
  );
};

export default Booking;
