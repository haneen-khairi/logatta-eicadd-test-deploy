import { useGetUserFinance } from "@/services/patient/queries";
import { Box, Stack, Typography } from "@mui/material";
import React,{useContext} from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { UserData } from "@/context/UserProvider";

const Finance = () => {
  const {profileData } = useContext(UserData);
  const financeData = useGetUserFinance(profileData?.id);
  const isLoading = financeData?.isRefetching || financeData?.isLoading;
  return (
    <>
      {isLoading ? (
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: "flex" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Stack direction="row" my={3} alignItems="center">
            <Typography variant="h5">
             عدد الحصص
            </Typography>
            <Typography variant="h5" color="#aeaaaa"  sx={{ px: 2 }}>
              {financeData?.data?.data?.total_session}
            </Typography>
          </Stack>
          <Stack direction="row" my={3} alignItems="center">
            <Typography variant="h5">
                المبلغ الاجمالي
            </Typography>
            <Typography variant="h5" color="#aeaaaa"  sx={{ px: 2 }}>
              {financeData?.data?.data?.total_required}
            </Typography>
          </Stack>
          <Stack direction="row" my={3} alignItems="center">
            <Typography color="green" variant="h5">
              المبلغ المدفوع :{" "}
            </Typography>
            <Typography variant="h5" color="#aeaaaa"   sx={{ px: 2 }}>
              {financeData?.data?.data?.total_paid}
            </Typography>
          </Stack>

          <Stack direction="row" my={3} alignItems="center">
            <Typography color="red" variant="h5">
              المبلغ المتبقي :
            </Typography>
            <Typography variant="h5" color="#aeaaaa"  sx={{ px: 2 }}>
            {financeData?.data?.data?.total_unpaid}
            </Typography>
          </Stack>
        </>
      )}
    </>
  );
};

export default Finance;
