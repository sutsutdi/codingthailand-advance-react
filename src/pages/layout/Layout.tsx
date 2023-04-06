import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import DrawerMenu from "./DrawerMenu";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));




export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
    
      <Header open = {open} handleDrawerOpen = {handleDrawerOpen} />
      <DrawerMenu  open = {open} handleDrawerClose = {handleDrawerClose}/> 
      <Main open={open}>
        <Box component="main">
          <Toolbar />
          <Container
            maxWidth={false}
            sx={{
              bgColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "580px",
              overflow: "auto",
              mt: 4,
              mb: 4,
            }}
          >
            <Outlet />
          </Container>
        </Box>
      </Main>
    </Box>
  );
}
