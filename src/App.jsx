import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
    Box,
    Drawer as MuiDrawer,
    AppBar as MuiAppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import {
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Dashboard as DashboardIcon,
    Group as GroupIcon,
    PersonAdd as PersonAddIcon,
    PostAdd as PostAddIcon,
    FeaturedPlayList as FeaturedPlayListIcon,
} from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MemberList from "./pages/MemberList";
import AddMember from "./pages/AddMember";
import PostList from "./pages/PostList";
import AddNewPost from "./pages/AddNewPost";
import UpdateMember from "./pages/UpdateMember";
import UpdatePost from "./pages/UpdatePost";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                display: open ? "none" : "block",
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Trang quản trị
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div">
                            Menu quản lý{" "}
                        </Typography>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            component={Link}
                            to="/"
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 3 : "auto",
                                    }}
                                >
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Trang chủ"
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            component={Link}
                            to="/members"
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 3 : "auto",
                                    }}
                                >
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Danh sách thành viên"
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            component={Link}
                            to="/add-member"
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 3 : "auto",
                                    }}
                                >
                                    <PersonAddIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Thêm người dùng"
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            component={Link}
                            to="/posts"
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 3 : "auto",
                                    }}
                                >
                                    <FeaturedPlayListIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Danh sách bài viết"
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            sx={{ display: "block" }}
                            component={Link}
                            to="/add-post"
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    px: 2.5,
                                    justifyContent: open ? "initial" : "center",
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        justifyContent: "center",
                                        mr: open ? 3 : "auto",
                                    }}
                                >
                                    <PostAddIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Thêm bài viết"
                                    sx={{
                                        opacity: open ? 1 : 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/members" element={<MemberList />} />
                        <Route path="/add-member" element={<AddMember />} />
                        <Route path="/posts" element={<PostList />} />
                        <Route path="/add-post" element={<AddNewPost />} />
                        <Route
                            path="/update-member/:id"
                            element={<UpdateMember />}
                        />
                        <Route
                            path="/update-post/:id"
                            element={<UpdatePost />}
                        />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}
