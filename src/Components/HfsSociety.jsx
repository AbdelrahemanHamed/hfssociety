import { Box, Typography } from "@mui/material";
import hfs_scoiety_img from "../assets/hfs-society-img.png";
import companyCallCard from "../assets/company_call.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
function HfsSociety() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "469px", height: "469px" }}>
          <Box
            component="img"
            src={hfs_scoiety_img}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Typography
          sx={{ fontSize: "50px", textAlign: "center", fontWeight: "700" }}
        >
          Want to join the community?
          <br />
          Join the next webinar
        </Typography>
      </Box>

      <Box sx={{ pt: "150px" }}>
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {[1, 2, 3].map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={companyCallCard}
                  sx={{ width: "100%", height: "100%" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}

export default HfsSociety;
