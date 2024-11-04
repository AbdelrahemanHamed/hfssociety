import { Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // استيراد الأيقونة الجديدة
import logo from "../assets/logo.png";
import { keyframes } from '@emotion/react';
import zIndex from './../../node_modules/@mui/material/modern/styles/zIndex';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const links = [
    { name: "What’s is HFS Soicety", path: "/" },
    { name: "Achievements", path: "/academy" },
    { name: "partners", path: "/sessions" },
    { name: "Media", path: "/trade-alerts" },
    { name: "Webinars", path: "/scanners" },
    { name: "Login", path: "/login" },
  ];
// Define keyframes for the wave effect
const waveAnimation = keyframes`
   0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;
  return (
    <Box
      className="navbar"
      sx={{
        width: "100%",
        height: "90px",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "15",
        display: "flex",
        alignItems: "center",
        backdropFilter: "blur(24.699999809265137px)",
        borderBottom: "3px solid black",
        borderradius: "0 0 10px 10px white",
        zIndex: "9999999999999999",
        
      }}
    >
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          justifyContent: "space-between",
          width: "100%",
          height: "110%",
          mx: "auto",
          borderBottom: "3px solid white",
          borderImage: "linear-gradient(to right, transparent, white, transparent) 01", // Gradient from center to sides
          padding: "0 80px",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Box sx={{ width: "104px", height: "53px" }}>
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        {/* Links for Medium and Larger Screens */}
        <Box sx={{ display: { xs: "none", md: "flex" },
         gap: { xs: "none", md: "50px" }, 
         alignItems: "center"
          }}>
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              style={{
                color: "#fff",
                fontSize: "20px",
                fontFamily: "SF Pro Display",
                fontWeight: "400",

              }}
            >
              {link.name}
            </Link>
          ))}
<Button
  sx={{
    width: "120px",
    height: "31px",
    background: "linear-gradient(90deg, #46DFFC, #E14696, #46DFFC)",
    backgroundSize: "200% 200%", // Extend background size for smooth animation
    backgroundPosition: "0% 50%", // Initial position
    color: "#fff",
    fontSize: { xs: "20px", xl: "20px" },
    fontWeight: "400",
    animation: `${waveAnimation} 4s ease-in-out infinite`, // Adjust speed as needed
  }}
>
  Join us
</Button>

          <Button
   sx={{
    position: "relative",
    backgroundColor: "#000",
    color: "#fff",
    width: "25px",
    height: "31.95px",
    boxShadow: "0px 0px 40px rgba(215, 215, 215, .35)", // Optional base shadow

  }}
          >
            AR
          </Button>
        </Box>

        {/* Menu Button for Small Screens */}
        <IconButton
          sx={{ display: { xs: "block", md: "none" }, color: "#fff" }}
          onClick={() => setIsDrawerOpen(true)}
        >
          <AiOutlineMenu />
        </IconButton>
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            backgroundColor: "#000",
            height: "100%",
            color: "#fff",
          }}
        >
          <List sx={{ width: "100%" }}>
            {links.map((link) => (
              <ListItem
                button
                key={link.name}
                onClick={() => setIsDrawerOpen(false)}
              >
                <Link
                  to={link.path}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary={link.name} />
                </Link>
              </ListItem>
            ))}
          </List>

          <Button
            sx={{
              width: "154px",
              height: "25px",
              background: "linear-gradient(90deg, #46DFFC 0%, #E14696 100%)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              mt: 2,
            }}
            onClick={() => setIsDrawerOpen(false)}
          >
            Join us
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
