import {
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItemButton,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/logo-main.png";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState,useContext } from "react";
import { navMobile } from "./style";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import profileImg from "../../../public/assets/images/profile.jpeg";
import Cookies from "js-cookie";
import { useGetUserData } from "@/services/auth/queries";
import { UserData } from "@/context/UserProvider";
import CountryDropdown from "./country-dropdown";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const {t} = useTranslation()
  const pathname = usePathname();
  const router = useRouter();
  const {profileData, setProfileData } = useContext(UserData);


  const navItems = [
    {
      text: t("home"),
      url: "/",
      id: "1",
    },
    {
      text: t("galleries"),
      url: "/gallery",
      id: "2",
    },
    {
      text: t("about_us"),
      url: "/about",
      id: "3",
    },
    {
      text:t("contact_us"),
      url: "/contact-us",
      id: "4",
    },
  ];
  const [mobileNav, setMobileNav] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleDrawerToggle = () => {
    setMobileNav(!mobileNav);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    handleClose();
    setMobileNav(false);
    setIsLogin(false)
    Cookies.set('token', null)
    setProfileData(null)
    router.push('/login')

  }

  const getUserData = useGetUserData()

  useEffect(() => {
    if (getUserData?.data) {
      setProfileData(getUserData?.data?.data)
      }
    
  }, [getUserData?.data]);


  return (
    <Box pb={{ xs: "4.2rem", sm: "5rem" }}>
      <Box
        sx={{
          boxShadow: "0px 4px 10px -10px #00000099",
          py: { xs: ".5rem", sm: "1rem" },
          position: "fixed",
          width: "100%",
          top: "0",
          left: "0",
          zIndex: "1000",
          backgroundColor: "common.white",
        }}
      >
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography component={Link} href="/">
              <Image
                src={logo}
                alt="b-right logo"
                width={mobile ? 190 : 300}
                height={mobile ? 40 : 60}
                style={{ zIndex: "9999", objectFit: "contain", width: "auto" }}
              />
            </Typography>
            <Box
              sx={
                mobileNav
                  ? navMobile
                  : mobileView
                  ? { display: "none" }
                  : { display: "flex", alignItems: "center" }
              }
            >
            
              {navItems.map((item) => (
                <Typography
                  variant="h5"
                  color={"common.primary"}
                  px={2}
                  sx={{
                    textDecoration: "none",
                    fontWeight: "700",
                    position: "relative",
                    px: 5,
                  }}
                  component={Link}
                  href={item.url}
                  key={item.id}
                  onClick={() => setMobileNav(false)}
                  className={`nav-link  ${pathname == item.url && "active"}`}
                >
                  {item.text}
                </Typography>
              ))}

              <Box>
                <Box>
                {!profileData? 
               <div>
                    <Button
                    onClick={handleClick}
                      sx={{
                        backgroundColor: "#621493",
                        color: "#fff",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        "&:hover": { backgroundColor: "#8853a9" },
                      }}
                    >
                    {t("text_13")}
                    </Button>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <Box component={"a"} href="https://mychild.eicadd.com/login" target="_blank">
                          اخصائي
                          </Box>
                        </ListItemButton>
                      </List>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => { handleClose(); setMobileNav(false); }}>
                          <Link href="/login">مراجع</Link>
                        </ListItemButton>
                      </List>
                    </Popover>
                  </div> 
                 :
                  <div>
                    <Box
                      onClick={handleClick}
                    >
                      <Image
                        src={profileImg}
                        alt="Profile"
                        style={{
                          objectFit: "cover",
                          borderRadius:"50%",
                          width: "40px",
                          height: "40px",
                          cursor:'pointer'
                        }}
                      />
                    </Box>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }} onClick={() => { setMobileNav(false); handleClose(); }}>
                      <Link href="/profile">الصفحه الشخصيه</Link>
                    </ListItemButton>
                  </List>

                      <List component="div" disablePadding>
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={handleLogout}
                        >
                          <Typography color="red" sx={{ cursor: "pointer" }}>
                            تسجيل الخروج
                          </Typography>
                        </ListItemButton>
                      </List>
                    </Popover>
                  </div>
                  }
                </Box>
              
              </Box>
                <LanguageSwitcher />
           {!mobileView && <CountryDropdown/>}

            </Box>
            <IconButton
              color="common.primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: "flex", md: "none", zIndex: 999999 } }}
            >
              {mobileNav ? (
                <CloseIcon sx={{ color: "common.primary" }} fontSize="large" />
              ) : (
                <MenuIcon sx={{ color: "common.primary" }} fontSize="large" />
              )}
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Navbar;
