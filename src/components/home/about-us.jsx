import { Box, Grid, Typography, Container, Stack } from "@mui/material";
import img1 from "../../../public/assets/images/gallery/9.jpeg";
import Image from "next/image";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BabyChangingStationIcon from "@mui/icons-material/BabyChangingStation";
import PsychologyIcon from "@mui/icons-material/Psychology";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";

const data = [
  {
    id: 1,
    text: "الخبرة",
    desc: "نهتم بالشخص بأكمله ، بكل تعقيداته و جوانب حياته.",
    icon: <AcUnitIcon style={{fontSize:"2rem"}} />,
  },
  {
    id: 2,
    text: "قيمنا",
    desc: "مجتمع فيه كل ما لديهم من أجل الصحة ومدى الحياة يستخدمون فريقًا للرعاية الصحية على المدرج.",
    icon: <BabyChangingStationIcon style={{fontSize:"2rem"}}  />,
  },
  {
    id: 3,
    text: "كادرنا",
    desc: "كادر طبي متخصص في مجال تشخيص و علاج التوحد و اضطرابات النمو.",
    icon: <PsychologyIcon style={{fontSize:"2rem"}} />,
  },
  {
    id: 4,
    text: "منهجيتنا",
    icon: <QueuePlayNextIcon style={{fontSize:"2rem"}} />,
    desc: "تقديم التميز في الجودة والخدمة التي تركز على المريض وأفضل طريقة للتعمق في صحة الشخص. ",
  },
];

export default function AboutUs() {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 3.5, md: 4 }}
        pt={{ xs: "0", sm: "2rem" }}
        pb={{ xs: "1.5rem", sm: "3rem" }}
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            sx={{ height: "100%" }}
          >
            <Typography sx={{mb:{xs:'1rem'}}} variant="h4" color="primary.main" fontWeight={600}>
              فريق متخصص ومدرب تدريباً عالياً في مجموعة متنوعة من الرعاية
              المتخصصة للاطفال و الرضع المصابين بالتوحد و اضطرابات النمو
            </Typography>
            {/* <Grid
              container
              spacing={{ xs: 1.5, md: 4 }}
              pt={{ xs: "0", sm: "2rem" }}
              pb={{ xs: "1.5rem", sm: "3rem" }}
              justifyContent="center"
            >
              {data.map((el) => (
                <Grid item xs={12} sm={6} key={el.id}>
                  <Box sx={{mb:{xs:'1rem', sm:".5rem"}}}>
                    <Stack direction="row" spacing={1}>
                      <Box sx={{color:"#621493",}}>{el.icon}</Box>
                      <Stack>
                        <Typography
                          variant="h4"
                          color="#000"
                          fontWeight={600}
                        >
                          {el.text}
                        </Typography>
                        <Typography
                          variant="p"
                          color="#8c8888"
                          fontWeight={600}
                        >
                          {el.desc}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid> */}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Image
            src={img1}
            alt="hero"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            //   transform: "scaleX(-1)",
              borderRadius:"10px"
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
