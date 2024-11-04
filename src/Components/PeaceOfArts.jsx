import { useState } from "react";
import { autocompleteClasses, Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { keyframes } from '@mui/system';

// import { Autoplay } from "swiper"; // Add Autoplay here
import peace_of_arts_img from "../assets/peace_of_arts_img.png";
import img1 from "../assets/peace_of_art_imgs/img1.png";
import img2 from "../assets/peace_of_art_imgs/img2.png";
import img3 from "../assets/peace_of_art_imgs/img3.png";
import img4 from "../assets/peace_of_art_imgs/img4.png";
import img5 from "../assets/peace_of_art_imgs/img5.png";
import img6 from "../assets/peace_of_art_imgs/img6.png";
import img7 from "../assets/peace_of_art_imgs/img7.png";
import img8 from "../assets/peace_of_art_imgs/img8.png";
import img9 from "../assets/peace_of_art_imgs/img9.png";
import img10 from "../assets/peace_of_art_imgs/img10.png";
import img11 from "../assets/StarsBG.png";
import Triangle from "../assets/Trianle.png";
import BlueRing from "../assets/BlueRing.png";



const Fade = keyframes`
  0% { opacity: 0.01; }
  25% { opacity: 0.1; }
  50% { opacity: 0.1; }
  75% { opacity: 0.1; }
  100% { opacity: 0; }
`;

function PeaceOfArts() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    // Define different widths for each image
    const widths = [
      '150px', '300px', '150px', '300px', '150px',
      '300px', '150px', '300px', '150px', '300px'
    ];
  

  return (
    <Box sx={{        // Container for the peace of arts section
      backgroundImage: `url(${img11})`,
      overflow:{xs:'hidden',
      md:'visible',
      position: 'relative',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      }}}>

        <img src={Triangle} alt="" 
            style={{
              position: 'absolute', 
              top: '50%', 
              left: '75%', 
              width: '30%', 
              height: '60%',
              zIndex: '-1',
              animation: `${Fade} 5s ease-in-out infinite`, // Adjust duration as needed

              }} 
              />
        <img src={Triangle} alt="" 
            style={{
              position: 'absolute', 
              bottom: '70%', 
              right: '80%', 
              width: '30%', 
              height: '60%',
              zIndex: '-1',
              animation: `${Fade} 5s ease-in-out infinite`, // Adjust duration as needed

              }} 
          />
        <img src={BlueRing} alt="" 
            style={{
              position: 'absolute', 
              top: '80%', 
              right: '85%', 
              width: '20%', 
              height: '40%',
              zIndex: '-1'

            }} 
          />

            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Tanseek Modern Pro Arabic",
                fontSize: "75px",
                letterSpacing: "50px",
                textAlign: "center",
                mb: "30px",
    
              }}
            >
              PEACE OF ART
            </Typography> 
          {/* pics slider */}
            <Box
              sx={{
                backgroundColor: "#19151d",
                height: "74vh",
                width: "90%",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "center",
                flexDirection: "column",
                overflow: "hidden",
                // mb: "30px",
              }}
            >


            <Box width={'100%'} pt={'0px'}>
            <Swiper
               modules={[Autoplay]}
               autoplay={{ delay: 0, disableOnInteraction: false }}
               spaceBetween={20}
               slidesPerView={6}
               loop={true} // Enable looping
               dir="ltr" // Ensures LTR direction
               rtl={false} // Disable RTL mode if set in global styles
               speed={15000} // Set a smooth transition speed (1000ms)
               style={{ width: '100%', height: '100%' }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                      src={src} 
                      alt={`Slide ${index + 1}`} 
                      style={{ width: widths[index], height: '253px', objectFit: 'cover' ,borderRadius:'10px'}} 
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            </Box>



            <Box 
              sx={{
                width: {xs:"100%",md:"100%"},
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <Swiper
             modules={[Autoplay]}
             autoplay={{ delay: 0, disableOnInteraction: false }}
             spaceBetween={20}
             slidesPerView={6}
             loop={true} // Enable looping
             dir="rtl" // Ensures LTR direction
             rtl={false} // Disable RTL mode if set in global styles
             speed={15000} // Set a smooth transition speed (1000ms)
             style={{ width: '100%', height: '100%' }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img 
                      src={src} 
                      alt={`Slide ${index + 1}`} 
                      style={{ width: widths[index], height: '253px', objectFit: 'cover' , borderRadius:'10px'}} 
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>

            </Box>
          </Box>  
    </Box>
  );
}

export default PeaceOfArts;
