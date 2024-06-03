import React, { useContext } from "react";
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

function ProfileDetails() {
  const { profileData } = useContext(UserData);
  return (
    <>
      {!profileData ? (
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              maxWidth: { md: "60%" },
            }}
          >
            <Stack
              direction="row"
              my={3}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h6"> الاسم</Typography>
                <Typography variant="h5" color="#aeaaaa" sx={{ px: 2 }}>
                  {profileData[0]?.name}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6"> الايميل </Typography>
                <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                  {profileData[0]?.email}
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
                <Typography variant="h6"> تاريخ الميلاد </Typography>
                <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                  {profileData[0]?.birth_date} 
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6"> الدوله</Typography>
                <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                  {profileData[0]?.country?.name}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Stack
            direction="row"
            my={3}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Typography variant="h6"> المدينه </Typography>
              <Typography variant="h6" color="#aeaaaa" sx={{ px: 2 }}>
                {profileData[0]?.city} - {profileData[0]?.region}
              </Typography>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
}

export default ProfileDetails;
