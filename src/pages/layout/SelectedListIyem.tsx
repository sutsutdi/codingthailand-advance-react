import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Dashboard  , People , BarChart } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { ListItem } from "@mui/material";

type MenuItem = {
  label: string;
  icon: any;
  href: string;
};

export default function SelectedListItem() {
  const navigate = useNavigate();

  const menuItem: Array<MenuItem> = [
    { label: "หน้าหลัก", icon: <Dashboard />, href: "/" },
    { label: "ยื่นใบลา", icon: <People />, href: "/layout/leave" },
    { label: "จัดการการลา", icon: <BarChart />, href: "/layout/manageleave" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      }}
    >
      <List>
        { menuItem.map((item) =>{ return (
            <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(item.href)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary= {item.label} />
            </ListItemButton>
          </ListItem>
          )}
         
        )}
       
        
      </List>
      <Divider />
    </Box>
  );
}
