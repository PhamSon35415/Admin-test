// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
    return (
        <AppBar
            sx={{
                ml: `${240}px`,
                backgroundColor: "#007BFF",
            }}
        >
            <Toolbar>
                <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Bảng Điều Khiển Quản Trị
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
