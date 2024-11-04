import { Box } from "@mui/material";
import Navbar from "./Navbar";
import About from "./About";
import OurFocus from "./OurFocus";
import OurStory from "./OurStory";
import PeaceOfArts from "./PeaceOfArts";
import SocietyProducts from "./SocietyProducts";
import HfsSociety from "./HfsSociety";
import FloatingCallButton from "./FloatingCallButton";

function Layout() {
  return (
    <Box>
      <Navbar />
      <About />
      <OurFocus />
      <OurStory />
      <PeaceOfArts/>
      <SocietyProducts />
      <HfsSociety />
      <FloatingCallButton />
    </Box>
  );
}

export default Layout;
