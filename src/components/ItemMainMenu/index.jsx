import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemMainMenu = ({ link, nameMenu, IconComponent, open }) => {
    return (
        <ListItem
            disablePadding
            sx={{ display: "block" }}
            component={Link}
            to={`/${link}`}
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
                    <IconComponent />{" "}
                </ListItemIcon>
                <ListItemText
                    primary={nameMenu}
                    sx={{
                        opacity: open ? 1 : 0,
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default ItemMainMenu;
