import React from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./Drawer";
import "./navbar.css";
import NavBarMenue from "./NavBarMenue";
import SuperAdminTabs from "./tabs/SuperAdminTabs";
import AdminTabs from "./tabs/AdminTabs";
function NavBar({ user }) {
  const [value, setValue] = React.useState("/");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };
  return (
    <AppBar sx={{ background: "white" }}>
      <Toolbar>
        <img className="navLogo" src="/gigalabs.png" alt="logo" />
        {isMatch ? (
          <>
            <DrawerComp user={user}/>
          </>
        ) : (
          <TabContext value={value}>
            {user.role == "superAdmin" ? (
              <SuperAdminTabs handleChange={handleChange} />
            ) : user.role == "admin" ? (
              <AdminTabs handleChange={handleChange} />
            ) : user.role == "employee" ? (
              <AdminTabs handleChange={handleChange} />
            ) : null}
          </TabContext>
        )}
        <div className="avatar">
          <NavBarMenue user={user} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

// <Tabs sx={{color:'black'}}>
// <Tab label="Item One" value="1" />
// <Tab label="Item Two" value="2" />
// <Tab label="Item Three" value="3" />
// </Tabs>
