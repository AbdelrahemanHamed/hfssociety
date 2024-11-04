import { Box, Typography } from "@mui/material";
import vector from "../assets/vector.png";
import plastine_flag from "../assets/BlackHole.gif";
import BGGALAXY from "../assets/19328015_MotionElements_blue-earth-hologram-vimage.gif";
import verctor2 from "../assets/vector2.png";
import vector1 from "../assets/bg1.webp";
import { keyframes } from '@mui/system';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;function OurFocus() {
  return (
    <Box sx={{ 
      position: "relative" ,
      overflow:{xs:'hidden',
      md:'visible',
      backgroundImage: `url(https://media.giphy.com/media/sWFYgYFjHGugleQdO7/giphy.gif)`,
      backgroundPosition: "center",

    },
      backgroundSize: "stretch",
    }}>
      <Box className="container" sx={{ position: "relative", zIndex: "12" }}>
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
          }}
        >
          OUR FOCUS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: {xs:"30px",md:"30px"},
            mt: "30px",
          }}
        >
          <Box
            sx={{
              width: {xs:"100%",md:"15%"},
              textAlign: "center",
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
            }}
          >
            <Box sx={{ width: "173px", height: "173px" }}
         
            >
             
              <Box
                component="img"
                src={vector}
                sx={{
                  width: "100%",
                  height: "100%" ,
                  animation: `${rotate} 10s linear infinite`, // adjust the duration as needed

                  }}
                
              />
            </Box>

            <Typography
              sx={{
                fontSize: "75px",
                fontFamily: "Tanseek Modern Pro Arabic",
                lineHeight: "105.6px",
              }}
            >
              S
              <br />
              O
              <br />
              C
              <br />
              I
              <br />
              E
              <br />
              T
              <br />
            </Typography>
          </Box>

          <Box
            sx={{ width: {xs:'100%',md:"307.48px"},gap: "10px", height: {xs:'100%',md:"293.96px"}, alignSelf: "center" }}
          >
           {/* <Box
              component="img"
              src={plastine_flag}
              sx={{ width: "100%", height: "100%" }}
            />  */}
          </Box>
              {/* mission  Vision section */}

              <Box
                sx={{ 
                  width: "50%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  alignItems: "center",

                }}
              >

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  pt: "120px",
                  // backgroundColor: "white",
                }}
              >
                <Box
                    className="card"
                  sx={{
                    width: "371px",
                    height: "424px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                  }}
                >
                  <Box sx={{ width: "314px", height: "221px" }}
                  
                  >
                    
                    <Typography
                      className="text-gradient"
                      sx={{
                        fontSize: "30px",
                        fontWeight: "900",
                        fontFamily: "SF Pro Display",
                        lineHeight: "35.8px",
                        mb: "20px",
                      }}
                    >
                      Our Vision
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        lineHeight: "23.87px",
                      }}
                    >
                      At HFS , our vision is to empower families worldwide by
                      providing the resources, support, and opportunities they need
                      to thrive. We aim to foster financial independence, health,
                      and well-being for every household, building a stronger future
                      together.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="card"
                  sx={{
                    width: "371px",
                    height: "424px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "314px", height: "221px" }}>
                    <Typography
                      className="text-gradient"
                      sx={{
                        fontSize: "30px",
                        fontWeight: "900",
                        fontFamily: "SF Pro Display",
                        lineHeight: "35.8px",
                        mb: "20px",
                      }}
                    >
                      Our Objectives
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        lineHeight: "23.87px",
                      }}
                    >
                      At HFS , our goal is to empower families with the resources they need for financial
                      independence and personal growth. We focus on promoting health and wellness, 
                      building strong communities, and continuously improving our services to meet the 
                      evolving needs of families worldwide.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
               sx={{
                 display: "flex", 
                 flexDirection: "column", 
                 gap: "10px" ,
                //  backgroundColor: "red"
                 }}
                 >
                <Box
                  className="card"
                  sx={{
                    width: "371px",
                    height: "424px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <Box sx={{ width: "314px", height: "221px" }}
                  
                  >
                    
                    <Typography
                      className="text-gradient"
                      sx={{
                        fontSize: "30px",
                        fontWeight: "900",
                        fontFamily: "SF Pro Display",
                        lineHeight: "35.8px",
                        mb: "20px",
                      }}
                    >
                      Our Mission
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        lineHeight: "23.87px",
                      }}
                    >
                      At HFS , our mission is to enhance the quality of life for families by offering a wide range of
                      essential services that promote financial stability,
                      personal growth, and well-being. We are committed to building a supportive community where individuals can thrive both personally and professionally.
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="card"
                  sx={{
                    width: "371px",
                    height: "424px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "314px", height: "221px" }}>
                    <Typography
                    className="text-gradient"
                      sx={{
                        fontSize: "30px",
                        fontWeight: "900",
                        fontFamily: "SF Pro Display",
                        lineHeight: "35.8px",
                        mb: "20px",
                      }}
                    >
                      Our Goals
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "SF Pro Display",
                        fontWeight: "400",
                        lineHeight: "23.87px",
                      }}
                    >
                      At HFS , our goals are to empower families to achieve financial stability,
                      foster personal and professional development, and promote overall well-being. 
                      We are dedicated to building strong, supportive communities and continuously improving our
                      services to better serve families worldwide.
                    </Typography>
                  </Box>
                </Box>
              </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: "1145px",
          height: "1725px",
          position: "absolute",
          top: "500px",
       
        }}
      >
        <Box
          component="img"
          src={verctor2}
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: "1887px",
          height: "1700px",
          position: "absolute",
          top: "-300px",
          right: "-200px",
          transform: "rotate(43.48 deg)",
        }}
      >
        <Box
          component="img"
          src={vector1}
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default OurFocus;
