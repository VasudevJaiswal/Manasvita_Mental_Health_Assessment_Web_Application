import React, { useState, useCallback } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HealingTwoToneIcon from "@mui/icons-material/SelfImprovement";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./NavBar.css";
import useAuth from "../../../Hooks/useAuth";
import { useHistory } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { green } from "@mui/material/colors";

// Constants for routes
const ROUTES = {
  home: "/home",
  services: "/services",
  doctors: "/doctors",
  appointment: "/appointment",
  about: "/about",
  login: "/login#login",
  profile: "/profile",
};

const Navbar = () => {
  // Authentication
  const { logout, user } = useAuth();
  const { displayName, photoURL } = user;

  // Navigation
  let history = useHistory();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);

  // Handlers for opening/closing menus
  const handleOpenNavMenu = useCallback((event) => {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleOpenUserMenu = useCallback((event) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(() => {
    setAnchorElNav(null);
  }, []);

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const handleUserControl = useCallback(
    (event) => {
      const userEvent = event.currentTarget.innerText;
      if (userEvent === "Logout") {
        logout();
      } else if (userEvent === "Profile") {
        history.push(ROUTES.profile);
      }
    },
    [logout, history]
  );

  // Services Dropdown Handlers
  const handleOpenServicesMenu = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseServicesMenu = () => {
    setAnchorElServices(null);
  };

  const navigationLinks = [
    { label: "Home", path: ROUTES.home },
    { label: "Doctors", path: `${ROUTES.doctors}#doctors` },
    { label: "Appointment", path: `${ROUTES.appointment}#appointment` },
    { label: "About", path: `${ROUTES.about}#about` },
  ];

  const servicesLinks = [
    { label: "Therapy Sessions", path: "/services/therapy" },
    { label: "Mental Health Counseling", path: "/services/counseling" },
    { label: "Mindfulness Programs", path: "/services/mindfulness" },
  ];

  return (
    <Box sx={{ mt: 8 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: green[500],
          height: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 80 }}>
            {/* Logo and Title */}
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              <HashLink smooth to={ROUTES.home} className="text-style">
                <HealingTwoToneIcon fontSize="large" sx={{ mr: 1 }} /> ManasVita
              </HashLink>
            </Typography>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {navigationLinks.map(({ label, path }) => (
                  <MenuItem key={label} onClick={handleCloseNavMenu}>
                    <HashLink smooth to={path} className="text-style">
                      {label}
                    </HashLink>
                  </MenuItem>
                ))}
                {!user?.email && (
                  <MenuItem>
                    <HashLink smooth to={ROUTES.login} className="text-style">
                      LOGIN
                    </HashLink>
                  </MenuItem>
                )}
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3,
              }}
            >
              {navigationLinks.map(({ label, path }) => (
                <HashLink key={label} smooth to={path} className="text-style">
                  <Button sx={{ color: "white", fontWeight: "bold" }}>
                    {label}
                  </Button>
                </HashLink>
              ))}

              {/* Services Dropdown */}
              <Button
                sx={{ color: "white", fontWeight: "bold" }}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleOpenServicesMenu}
              >
                Services
              </Button>
              <Menu
                id="services-menu"
                anchorEl={anchorElServices}
                open={Boolean(anchorElServices)}
                onClose={handleCloseServicesMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                {servicesLinks.map(({ label, path }) => (
                  <MenuItem key={label} onClick={handleCloseServicesMenu}>
                    <HashLink smooth to={path} className="text-style">
                      {label}
                    </HashLink>
                  </MenuItem>
                ))}
              </Menu>

              {!user?.email && (
                <HashLink smooth to={ROUTES.login} className="text-style">
                  <Button sx={{ color: "white", fontWeight: "bold" }}>Login</Button>
                </HashLink>
              )}
            </Box>

            {/* User Avatar and Menu */}
            {user?.email && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={displayName} src={photoURL || "/static/images/avatar/2.jpg"} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "50px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Typography sx={{ p: "10px", fontWeight: "bold" }} color="primary" textAlign="center">
                    Hi, {displayName}
                  </Typography>
                  <Divider />
                  {["Profile", "Logout"].map((setting) => (
                    <MenuItem key={setting} onClick={handleUserControl}>
                      {setting}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
