import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import { useNavigate } from "react-router-dom";
import { drawerContext } from "../store/drawer-context";

const drawerWidth = 240;

function SideNav(props) {
  const drawerCtx = React.useContext(drawerContext);
  const navigate = useNavigate();
  const { window } = props;

  const handleDrawerToggle = () => {
    drawerCtx.setOpen((open) => !open);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/images");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ImageRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Images" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/checkboxes");
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <CheckBoxRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Checkboxes" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="dashboard folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={drawerCtx.open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

SideNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideNav;
