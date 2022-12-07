import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  AppBar,
  Avatar,
  Box,
  Chip,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Logout,
  MenuOutlined,
  Notifications,
  Person,
  PublicOutlined,
  Settings,
} from "@mui/icons-material";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 300;

const LoginHeader = (props) => {
  const windoww = props.window;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openj, setOpenj] = React.useState(true);
  const [opene, setOpene] = React.useState(true);
  const [openf, setOpenf] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const openmenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    windoww !== undefined ? () => window().document.body : undefined;
  const handleClickj = () => {
    setOpenj(!openj);
  };
  const handleClicke = () => {
    setOpene(!opene);
  };
  const handleClickf = () => {
    setOpenf(!openf);
  };
  const handleLogout = (event) => {
    localStorage.removeItem("access_token");
  };
  const drawer = (
    <Box>
      <a
        href="/"
        className="inline-block w-full max-w-130"
        style={{ marginLeft: "20px", textDecoration: "none" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>Buy Now</Typography>
      </a>
      <Divider />
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClickj}>
          <ListItemText primary="Page1" />
          {openj ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openj} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/dashboard" style={{ color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Page1" />
              </ListItemButton>
            </Link>
            <Link to="/career-services" style={{ color: "black" }}>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Page2" />
              </ListItemButton>
            </Link>
            <Link to="/resources/interview-library" style={{ color: "black" }}>
              {" "}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Page3" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClicke}>
          <ListItemText primary="Page1" />
          {opene ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={opene} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/referrer-dash" style={{ color: "black" }}>
              {" "}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Page1" />
              </ListItemButton>
            </Link>
            <Link to="/offer-career-services" style={{ color: "black" }}>
              {" "}
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Page1" />
              </ListItemButton>
            </Link>
          </List>
        </Collapse>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar
        position="static"
        sx={{
          background: "white",
          padding: { md: "0 80px", xs: "0 30px" },
          boxShadow: "0",
          borderBottom: "1px solid #E2E8F0",
          zIndex: "9 !important",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <a
              href="/"
              className="inline-block w-full max-w-130"
              style={{ textDecoration: "none" }}
            >
              <Typography sx={{ fontWeight: "bold", color: "#333" }}>
                Buy Now
              </Typography>
            </a>
          </Box>
          <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
            <Box
              sx={{ display: "flex", justifyContent: "center", height: "65px" }}
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mr: 2,
                  position: "relative",
                  "&:hover .jobseeker": { display: "block !important" },
                }}
              >
                <Typography
                  sx={{
                    mr: 1,
                    color: "#475569",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Page1
                </Typography>
                <Paper
                  className="jobseeker"
                  sx={{
                    position: "absolute",
                    top: "50px",
                    left: "0",
                    display: "none",
                  }}
                >
                  <MenuList>
                    <Link to="/dashboard" style={{ color: "black" }}>
                      <MenuItem>Pag2 1Item</MenuItem>
                    </Link>
                    <Link to="/career-services" style={{ color: "black" }}>
                      <MenuItem>Page2 Item</MenuItem>
                    </Link>
                    <Link
                      to="/resources/interview-library"
                      style={{ color: "black" }}
                    >
                      <MenuItem>Page1</MenuItem>
                    </Link>
                  </MenuList>
                </Paper>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mr: 2,
                  position: "relative",
                  "&:hover .employees": { display: "block !important" },
                }}
              >
                <Typography
                  sx={{
                    mr: 1,
                    color: "#475569",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Page1
                </Typography>
                <Paper
                  className="employees"
                  sx={{
                    position: "absolute",
                    top: "50px",
                    left: "0",
                    display: "none",
                  }}
                >
                  <MenuList>
                    <Link to="/referrer-dash" style={{ color: "black" }}>
                      <MenuItem>Pag2</MenuItem>
                    </Link>
                    <Link
                      to="/offer-career-services"
                      style={{ color: "black" }}
                    >
                      <MenuItem>Page1</MenuItem>
                    </Link>
                  </MenuList>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  mr: 2,
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <div>
              <IconButton
                type="button"
                color="primary"
                block
                onClick={() => {
                  history("/messages");
                }}
              >
                <MailIcon color="info" />
              </IconButton>
            </div>
            <div>
              <IconButton
                type="button"
                color="primary"
                block
                onClick={() => {
                  history("/messages");
                }}
              >
                <Notifications color="info" />
              </IconButton>
            </div>

            <Tooltip title="Account Settings">
              <Box
                onClick={handleClickMenu}
                sx={{ ml: 0.5, mr: 0.5, cursor: "pointer" }}
                aria-controls={openmenu ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openmenu ? "true" : undefined}
              >
                <Chip
                  color="default"
                  size="medium"
                  label="Asad"
                  variant="outlined"
                  sx={{
                    height: 32,
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#334155",
                  }}
                  avatar={
                    <Avatar
                      alt="pengiun"
                      src={""}
                      sx={{ width: 40, height: 40 }}
                    />
                  }
                />
              </Box>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openmenu}
              onClose={handleCloseMenu}
              onClick={handleCloseMenu}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>{" "}
                Profile
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <PublicOutlined fontSize="small" />
                </ListItemIcon>
                Public Profile
              </MenuItem>
              <Divider />

              <Link to="/profile/edit" style={{ color: "black" }}>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <Box sx={{ display: { md: "none", xs: "block" } }}>
              <IconButton onClick={handleDrawerToggle}>
                <MenuOutlined />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          // ModalProps={{
          //   keepMounted: true,
          // }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </AppBar>
    </Box>
  );
};
export { LoginHeader };
