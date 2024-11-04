import { Box, Typography } from "@mui/material";
import blankImg from "../assets/blank.png";
import googlePlay from "../assets/googleplay.png";
import appleStore from "../assets/apple.png";
import card1Bg from "../assets/card1-bg.png";
import card1_vector from "../assets/card1_vector.png";
import card2_vector from "../assets/card2_vector.png";

import card1Bg2 from "../assets/card1_bg2.png";
import cardsBg from "../assets/ProductCardBG2.png";
import cardsB3 from "../assets/CSproductBG.png";
import card2bg from "../assets/card2-bg.png";
import card2bg2 from "../assets/card2-bg2.png";
// import { useEffect } from "react";

function SocietyProducts() {
  return (
    <Box>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
            mb: "100px",
          }}
        >
          SOCIETY
          <br />
          PRODUCTS
        </Typography>
        {/* card 1 */}
        <Box
          sx={{
            width: "1099px",
            height: "522px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#000",
            justifyContent: "space-between",
            mt: "40px",
            borderRadius: "25px",
            backgroundImage: `url(${cardsBg})`,
            backgroundSize: "cover",
            objectFit: "cover",
            position: "sticky",
            top: "100px",
            px: "30px",
            overflow: "hidden",
          }}
        >
          {/* left side */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "20px", letterSpacing: "11px",zIndex:4 }}
            >
              EDUCATIONAL
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "30px",
                lineHeight: "10.35px",
                mb: "40px",
                fontWeight: "700",
                letterSpacing: "10px",
              }}
            >
              TRADING SOCIETY
            </Typography>

            <Typography
              sx={{
                fontWeight: "700",
                color: "#ABABAB",
                lineHeight: "21.48px",
              }}
            >
              <Typography component="span" sx={{ color: "#E3CB86" }}>
                TRADING SOCIETY
              </Typography>{" "}
              is more than just an educational platform; it’s a gateway to
              mastering the fast-evolving world of forex. We empower our
              community with cutting-edge tools, expert guidance, and
              comprehensive resources to help you navigate the complexities of
              forex trading with confidence.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: "20px",
              }}
            >
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={googlePlay}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  // zIndex: "100",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={appleStore}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>

          {/* right side */}
          {/* <Box
            sx={{
              width: "432px",
              height: "366px",
              backgroundImage: `url(${blankImg})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
            }}
          >
            432 x 366
          </Box> */}

          <Box
            sx={{
              width: "380px",
              height: "300px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Box
              component="img"
              src={card1Bg}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box
            sx={{
              width: "250px",
              height: "250px",
              position: "absolute",
              bottom: "-100px",
              right: "-100px",
              transform: "rotate(150.19 deg)",
            }}
          >
            {/* <Box
              component="img"
              src={card1Bg2}
              sx={{ width: "100%", height: "100%" }}
            /> */}
          </Box>
          <Box
            sx={{
              width: "151px",
              height: "151px",
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <Box
              component="img"
              src={card1_vector}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>

        {/* card 2 */}
        <Box
          sx={{
            width: "1099px",
            height: "522px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#000",
            justifyContent: "space-between",
            mt: "40px",
            borderRadius: "25px",
            backgroundImage: `url(${cardsB3})`,
            backgroundSize: "cover",
            objectFit: "cover",
            position: "sticky",
            top: "0",
            px: "30px",
            overflow: "hidden",
          }}
        >
          {/* left side */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "20px", letterSpacing: "11px" }}
            >
              EDUCATIONAL
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "30px",
                lineHeight: "10.35px",
                mb: "40px",
                fontWeight: "700",
                letterSpacing: "10px",
              }}
            >
              CYPER SOCIETY
            </Typography>

            <Typography
              sx={{
                fontWeight: "700",
                color: "#ABABAB",
                lineHeight: "21.48px",
              }}
            >
              <Typography component="span" sx={{ color: "#A26FC4" }}>
              Cyper Society
              </Typography>{" "}
             is your ultimate learning platform designed to equip
              you with the skills needed to excel in the world of programming.
              From mastering the intricacies of cybersecurity to diving deep
              into embedded systems, web development, and mobile application
              creation, Cyper Society offers comprehensive courses that empower
              you to shape the digital future.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: "20px",
              }}
            >
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={googlePlay}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  // zIndex: "100",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={appleStore}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>

          {/* right side */}
          {/* <Box
            sx={{
              width: "432px",
              height: "366px",
              backgroundImage: `url(${blankImg})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
            }}
          >
            432 x 366
          </Box> */}

          <Box
            sx={{
              width: "380px",
              height: "300px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Box
              component="img"
              src={card2bg}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>

          <Box
            sx={{
              width: "250px",
              height: "250px",
              position: "absolute",
              bottom: "-60px",
              right: "-70px",
              transform: "rotate(150.19 deg)",
            }}
          >
            {/* <Box
              component="img"
              src={card2bg2}
              sx={{ width: "100%", height: "100%" }}
            /> */}
          </Box>
          <Box
            sx={{
              width: "143px",
              height: "140px",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
          >
            <Box
              component="img"
              src={card2_vector}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>

  
    </Box>
  );
}

export default SocietyProducts;
