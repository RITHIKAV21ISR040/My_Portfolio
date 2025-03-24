import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/Rithika.png";
import About from "./About";
import ServicesSection from "./ServicesSection";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1A1A2E, #16213E)",
        color: "#FFF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: "80px", md: "100px" },
        pb: { xs: "100px", md: "120px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Profile Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  width: { xs: "250px", md: "320px" },
                  height: { xs: "250px", md: "320px" },
                  borderRadius: "50%",
                  border: "8px solid #00B207",
                  boxShadow: "0 0 25px #00B207",
                  overflow: "hidden",
                }}
              >
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </motion.div>
          </Grid>

          {/* Hero Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                  textAlign: "left",
                  lineHeight: 1.3, // Increased line height for better readability
                }}
              >
                Hi, I'm <span style={{ color: "#00B207" }}>Rithika</span>
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  textAlign: "left",
                  fontSize: "2rem",
                  position: "relative",
                  display: "inline-block",
                  color: "transparent",
                  WebkitTextStroke: "1px #FFF",
                  backgroundImage:
                    "linear-gradient(90deg, #00FFA3, #0075FF, #FFD700, #FF5733)",
                  backgroundSize: "400% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  animation:
                    "typingEffect 4s steps(30) infinite alternate, moveGradient 4s linear infinite",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  borderRight: "3px solid #FFF", // Blinking Cursor Effect
                }}
              >
                Frontend Developer | UI/UX Designer
              </Typography>

              <style>
                {`
    @keyframes typingEffect {
      0% { width: 0; }
      100% { width: 100%; }
    }

    @keyframes moveGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}
              </style>

              <Typography
                variant="body1"
                color="grey.300"
                sx={{
                  mt: 5,
                  fontSize: "1.5rem",
                  textAlign: "left",
                  lineHeight: 1.8, // Added spacing between lines for better readability
                  paddingTop: "10px", // Extra spacing above
                  paddingBottom: "10px", // Extra spacing below
                }}
              >
                Crafting beautiful and functional web applications with ReactJS,
                Material-UI, and modern UI/UX design principles.
              </Typography>

              <Box sx={{ mt: 5, textAlign: "left" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00B207",
                    px: 5,
                    py: 1.8,
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    borderRadius: "30px",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#008c06",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Hire Me
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    ml: 3,
                    px: 5,
                    py: 1.8,
                    color: "#00B207",
                    borderColor: "#00B207",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    borderRadius: "30px",
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#00B207",
                      color: "#FFF",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  View Portfolio
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Sections */}
      <Box sx={{ width: "100%", mt: 12 }}>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Box>
    </Box>
  );
};

export default Home;
