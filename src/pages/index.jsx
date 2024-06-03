import Slider from "@/components/home/Slid";
import About from "@/components/home/about";
import WhoWeAre from "@/components/home/whoWeAre";
import Services from "@/components/home/services";
import AboutUs from "@/components/home/about-us";

const index = () => {
  return (
    <>
      <Slider />
      <About />
      <WhoWeAre />
      <Services/>
      <AboutUs/>
    </>
  );
}
export default index;
