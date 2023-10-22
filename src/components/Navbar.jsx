import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import "../styles/navbar.css";

const drawerWidth = "max-content";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* ICONO 3 BARRAS */}
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 1, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* EL "DRAWER" QUE SE ABRE*/}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* ESPACIO DE ARRIBA DEL "DRAWER" */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        {/* LISTA DE ITEMS DENTRO DEL "DRAWER" */}
        {/* <List>
          {['Mapa', 'Proyectos', 'Obras'].map((text, index) => (
            <ListItem key={text} >
              <ListItemButton> */}
        {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
        {/* <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        <List>
          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/MapAr" className="navbar-anchor">
                Mapa
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/proyectos" className="navbar-anchor">
                Proyectos
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/obras" className="navbar-anchor">
                obras
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        {/* CIERRE LISTA DE ITEMS DENTRO DEL "DRAWER" */}

        <Divider />

        {/* LISTA DE ITEMS DENTRO DEL "DRAWER" */}
        <List>
          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/informacion" className="navbar-anchor">
                Cancer de mama
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/Donaciones" className="navbar-anchor">
                Donaciones
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link to="/lrdemo/Nosotres" className="navbar-anchor">
                Nosotres
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        {/* CIERRE LISTA DE ITEMS DENTRO DEL "DRAWER" */}
      </Drawer>

      {/* CIERRE DEL "DRAWER" QUE SE ABRE */}

      {/* NO SE QUE ES  */}

      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}
    </Box>
  );
}

// <div>
//   <p>navbar</p>
//   <a href="/MapAr" target="_blank" rel="noopener noreferrer">ArMap</a>
//   <a href='/proyectos' target='_blank' rel='noopener noreferrer'> proyectos</a>
//   <a href='/donations' target='_blank' rel='noopener noreferrer'> donations</a>
// </div>
