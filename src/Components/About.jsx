import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion"; // استيراد framer-motion
import About_img from "../assets/aboutus_img.png";
import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";
import Vedio from "../assets/vedios/HFS (1).mp4";
import { keyframes } from '@mui/system';

const shadowPulse = keyframes`
  0% { box-shadow: 100px 0px 50px 1px rgba(0, 0,0, 0.75); }
  50% { box-shadow: 10px 50px 60px 3px rgba(219, 219, 219, 0.85); }
  100% { box-shadow: 10px 0px 50px 1px rgba(0, 0, 0, 1.0); }
`;

const rotateAndFade = keyframes`
  0% { transform: rotate(0deg); opacity: 1; }
  50% { transform: rotate(45deg); opacity: 0.5; }
  100% { transform: rotate(180deg 90deg); opacity: 0 2; }
  
`;
const Fade = keyframes`
  0% { transform:  opacity: 1; }
  25% { transform:  opacity: 0.1; }
  50% { transform:  opacity: 0.1; }
  75% { transform:  opacity: 0.1; }
  100% { transform:  opacity: 1; }
`;
function About() {
  return (
    <Box sx={{ position: "relative",overflow:{xs:'hidden',md:'visible'},pb:{xs:'30px',md:'0'} }}>
      {/* الحاوية الخارجية */}
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: { xs: "center", md: "space-between" },
            px: "1px",
          }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* النصوص */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              sx={{
                fontSize: { xs: "40px", md: "70px", xl: "90px" },
                fontWeight: "400",
                lineHeight: "1.1",
                fontFamily: "Bebas Neue",
                zIndex: "9999",

              }}
            >
              Smart Business <br /> with Smart People
            </Typography>

            <Typography
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              sx={{
                fontSize: { xs: "16px", md: "20px", lg: "20px" },
                lineHeight: "1.5",
                fontWeight: "400",
                mt: 2,
                zIndex: "9999",
              }}
            >
              Grow your business to the next level to<br /> improve your
              business performance to <br /> stay competitive
            </Typography>

            {/* إحصائيات */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              sx={{
                display: "flex",
                gap: "20px",
                textAlign: "center",
                flexWrap: "wrap",
                mt: 3,
              }}
            >
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Countries", value: "16+" },
                { label: "Ways to earn", value: "8+" },
              ].map((item) => (
                <Box key={item.label} sx={{ minWidth: "100px" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "36px", md: "48px" },
                      lineHeight: "1.2",
                      fontFamily: "Bebas Neue",
                    }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "25px" },
                      lineHeight: "1.5",
                      color: "#BFA0A0",
                      fontFamily: "Bebas Neue",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              sx={{
                width: "2000px",
                height: "2200px",
                position: "absolute",
                top: "-130vh",
                right: "50vh",
                transform: "rotate(45deg)",
              }}
            >
          <Box
            component="img"
            src={bg2}
            sx={{
              width: "100%",
              height: "100%",
              animation: `${Fade} 5s ease-in-out infinite`, // Adjust duration as needed
              zIndex: "-1",
            }}
          />
      </Box>

          </Box>

          {/* الصورة */}
  
          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            sx={{
              width: { xs: "100%", md: "45%", lg: "58%" },
              height: "500px",
              position: "relative",
              zIndex: "1",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{ 
                width: "100%",
                height: "auto" ,
              }}
            />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              animation: `${shadowPulse} 1s ease-in-out infinite`,
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            >
              <source src={Vedio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </Box>
        </Box>
      </Box>

      {/* الخلفية الدوارة */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        sx={{
          width: "2000px",
          height: "2200px",
          position: "absolute",
          top: "-140vh",
          right: "-100vh",
          transform: "rotate(45deg)",
        }}
      >
 <Box
  component="img"
  src={bg1}
  sx={{
    width: "100%",
    height: "100%",
    animation: `${rotateAndFade} 5s ease-in-out infinite`, // Adjust duration as needed
  }}
/>
      </Box>
      
    </Box>
  );
}

export default About;
