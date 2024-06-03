import HeroPages from "@/components/shared/HeroPages";
import React from "react";
import img from "../../public/assets/images/service-bg.jpeg";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ChangePassword from "@/components/change-password";
import AudioList from "@/components/audio/audio.list";
import { TabPanel, a11yProps } from "@/components/taps";
import Booking from "@/components/booking";
import Reports from "@/components/reports";
import Finance from "@/components/finance";
import ProfileDetails from "@/components/profile-details";
import withAuth from "@/guards/withAuth";

const Profile = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeroPages
        links={[
          { id: 1, url: "/", name: "الرئيسية" },
          { id: 2, url: "#", name: "الصفحه الشخصيه" },
        ]}
        title="الصفحه الشخصيه"
        img={img}
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{ my: 5 }}
          //   alignItems="center"
          my={3}
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Tabs
                orientation={mobile ? "horizontal" : "vertical"}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <Tab label="الصفحه الشخصيه" {...a11yProps(0)}>
                  الصفحه الشخصيه
                </Tab>
                <Tab label="الحساب " {...a11yProps(3)}>
                  الحساب
                </Tab>
                <Tab label="مواعيد" {...a11yProps(2)}>
                  {" "}
                  مواعيد
                </Tab>

                <Tab label="  تقارير و فحوصات " {...a11yProps(1)}>
                  تقارير و فحوصات
                </Tab>

                <Tab label="توصيات الطبيب" {...a11yProps(4)}>
                  توصيات الطبيب
                </Tab>
                <Tab label="  تغيير الرقم السري" {...a11yProps(5)}>
                  تغيير الرقم السري
                </Tab>
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack>
              <TabPanel value={value} index={0}>
                <ProfileDetails/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Finance />
              </TabPanel>
              <TabPanel value={value} index={2}>
               <Booking />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Reports />
              </TabPanel>

              <TabPanel value={value} index={4}>
                <AudioList />
              </TabPanel>
              <TabPanel value={value} index={5}>
                <ChangePassword />
              </TabPanel>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default withAuth(Profile);;
