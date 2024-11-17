import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Typography,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ArticleIcon from "@mui/icons-material/Article";

function Sidebar() {
    return (
        <Box
            sx={{
                width: 250,
                backgroundColor: "#ffffff",
                height: "100vh",
                position: "fixed",
                top: "70px",
            }}
        >
            <Typography
                variant="h6"
                align="center"
                gutterBottom
                sx={{ color: "#333" }}
            >
                Quản trị hệ thống
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <List component={"nav"}>
                <ListItem
                    component={Link}
                    to="/members"
                    button
                    sx={{
                        textDecoration: "none",
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#e0e3e7" },
                    }}
                >
                    <ListItemIcon>
                        <GroupIcon sx={{ color: "#3f51b5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý thành viên" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/add-member"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <PersonAddIcon sx={{ color: "#4caf50" }} />
                    </ListItemIcon>
                    <ListItemText primary="Thêm thành viên" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/edit-member"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <EditIcon sx={{ color: "#ff9800" }} />
                    </ListItemIcon>
                    <ListItemText primary="Sửa thành viên" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/delete-member"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <DeleteIcon sx={{ color: "#f44336" }} />
                    </ListItemIcon>
                    <ListItemText primary="Xóa thành viên" />
                </ListItem>
            </List>

            <Divider sx={{ mb: 2 }} />

            <List component={"nav"}>
                <ListItem
                    component={Link}
                    to="/posts"
                    button
                    sx={{
                        textDecoration: "none",
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#e0e3e7" },
                    }}
                >
                    <ListItemIcon>
                        <ArticleIcon sx={{ color: "#3f51b5" }} />
                    </ListItemIcon>
                    <ListItemText primary="Quản lý bài viết" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/add-post"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <PostAddIcon sx={{ color: "#4caf50" }} />
                    </ListItemIcon>
                    <ListItemText primary="Thêm bài viết" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/edit-post"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <EditIcon sx={{ color: "#ff9800" }} />
                    </ListItemIcon>
                    <ListItemText primary="Sửa bài viết" />
                </ListItem>
                <ListItem
                    component={Link}
                    to="/delete-post"
                    button
                    sx={{
                        textDecoration: "none",
                        pl: 4,
                        borderRadius: 1,
                        "&:hover": { backgroundColor: "#d0d4da" },
                    }}
                >
                    <ListItemIcon>
                        <DeleteIcon sx={{ color: "#f44336" }} />
                    </ListItemIcon>
                    <ListItemText primary="Xóa bài viết" />
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar;
