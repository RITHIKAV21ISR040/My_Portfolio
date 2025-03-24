import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  SportsBasketball,
} from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 6,
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left Section - Logo & Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold">
              Rithika<span style={{ color: "#00B207" }}>.</span>
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "#bbb" }}>
              Passionate Web Developer | UI/UX Enthusiast. Building modern,
              responsive web applications that enhance user experiences.
            </Typography>
          </Grid>

          {/* Middle Section - Contact Details */}
          <Grid item xs={12} md={8} container spacing={4}>
            {/* Email Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                SEND MAIL
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                <Link
                  href="mailto:info@portfolio.com"
                  color="inherit"
                  underline="none"
                >
                  rithivarathan123@gmail.com
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                <Link
                  href="mailto:career@portfolio.com"
                  color="inherit"
                  underline="none"
                >
                  rithikav8056@gmail.com
                </Link>
              </Typography>
            </Grid>

            {/* Phone Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                MAKE CALL
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                +91 80568 05791
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                +91 98437 52196
              </Typography>
            </Grid>

            {/* Address Section */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" fontWeight="bold">
                GET IN TOUCH
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                16/10, East Street
              </Typography>
              <Typography variant="body2" sx={{ color: "#bbb" }}>
                Paramathi Velur, Namakkal, India
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Footer Bottom - Social Icons & Copyright */}
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            All Rights Reserved
          </Typography>

          {/* Social Media Icons */}
          <Box>
            <IconButton href="#" sx={{ color: "#bbb" }}>
              <Facebook />
            </IconButton>
            <IconButton href="#" sx={{ color: "#bbb" }}>
              <Twitter />
            </IconButton>
            <IconButton href="#" sx={{ color: "#bbb" }}>
              <SportsBasketball />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/rithika-varatharasan-27557b259/"
              sx={{ color: "#bbb" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>

        {/* Scroll to Top Button */}
        <IconButton
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            backgroundColor: "#7E57C2",
            color: "#fff",
            "&:hover": { backgroundColor: "#5E35B1" },
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Footer;
