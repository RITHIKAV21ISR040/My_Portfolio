import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Rithika_V_Resume.pdf";
    link.download = "Rithika_V_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
        color: "#000",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid #ddd",
        py: 1,
        zIndex: 1000,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            textDecoration: "none",
            color: "#000",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              color: "#00B207",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => handleScroll("home")}
        >
          My Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box sx={{ width: 250, p: 2 }}>
                <IconButton
                  onClick={() => setDrawerOpen(false)}
                  sx={{ float: "right" }}
                >
                  <CloseIcon />
                </IconButton>
                <List>
                  {[
                    "home",
                    "about",
                    "experience",
                    "services",
                    "projects",
                    "contact",
                  ].map((item) => (
                    <ListItem
                      button
                      key={item}
                      onClick={() => handleScroll(item)}
                    >
                      <ListItemText
                        primary={item.charAt(0).toUpperCase() + item.slice(1)}
                      />
                    </ListItem>
                  ))}
                  {/* Download CV Button Inside Drawer */}
                  <ListItem>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: "linear-gradient(145deg, #6A00FF, #5200cc)",
                        color: "#fff",
                        borderRadius: "25px",
                        px: 3,
                        py: 1,
                        transition: "all 0.3s ease-in-out",
                        boxShadow: "5px 5px 15px rgba(106, 0, 255, 0.3)",
                        "&:hover": {
                          background:
                            "linear-gradient(145deg, #5200cc, #3d0099)",
                          transform: "scale(1.05)",
                          boxShadow: "3px 3px 10px rgba(106, 0, 255, 0.5)",
                        },
                      }}
                      onClick={handleDownload}
                    >
                      Download CV
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box>
            {[
              "home",
              "about",
              "experience",
              "services",
              "projects",
              "contact",
            ].map((item) => (
              <Button
                key={item}
                onClick={() => handleScroll(item)}
                sx={navButtonStyle}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </Box>
        )}

        {!isMobile && (
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(145deg, #6A00FF, #5200cc)",
              color: "#fff",
              borderRadius: "25px",
              px: 3,
              py: 1,
              transition: "all 0.3s ease-in-out",
              boxShadow: "5px 5px 15px rgba(106, 0, 255, 0.3)",
              "&:hover": {
                background: "linear-gradient(145deg, #5200cc, #3d0099)",
                transform: "scale(1.05)",
                boxShadow: "3px 3px 10px rgba(106, 0, 255, 0.5)",
              },
            }}
            onClick={handleDownload}
          >
            Download CV
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const navButtonStyle = {
  mx: 1,
  fontSize: "16px",
  fontWeight: "500",
  color: "#000",
  textTransform: "none",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  borderRadius: "8px",
  boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "#ddd",
    transform: "translateY(-2px)",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.2)",
  },
};

export default Navbar;
