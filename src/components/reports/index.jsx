import { Box, Grid, Typography, CircularProgress } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { useGetUserFiles } from '@/services/patient/queries';
import pdfImg from '../../../public/assets/images/pdf.png';

const Reports = () => {
  const filesData = useGetUserFiles();
  const isLoading = filesData?.isRefetching || filesData?.isLoading;
  console.log(filesData?.data)

  return (
    <>
      {isLoading ? (
        <Box
          justifyContent="center"
          alignItems="center"
          sx={{ display: 'flex' }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {filesData?.data?.data?.attach?.length > 0 || filesData?.data?.data?.fixed?.length > 0 ? (
            <>
              {filesData.data?.data?.attach?.map((el) => (
                <Grid item xs={6} sm={4} md={3} key={el.id} sx={{ my: '1rem' }}>
                  <Box component="a" href={el.path} target='_blank'>
                    <Image
                      src={pdfImg}
                      alt={el?.name}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <Typography textAlign="center">{el.name}</Typography>
                  </Box>
                </Grid>
              ))}
              {filesData.data?.data?.fixed?.map((el) => (
                <Grid item xs={6} sm={4} md={3} key={el.id} sx={{ my: '2rem' }}>
                  <Box component="a" href={el.path} target='_blank'>
                    <Image
                      src={pdfImg}
                      alt={el?.name}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <Typography textAlign="center">{el.name}</Typography>
                  </Box>
                </Grid>
              ))}
            </>
          ) : (
            <Typography variant="h6">لا يوجد تقارير</Typography>
          )}
        </Grid>
      )}
    </>
  );
};

export default Reports;
