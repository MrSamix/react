import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router";
import { useAuth } from "../../features/context/AuthContext";

const pages = ["Категорії", "Товари", "Про нас"];
const settings = ["Profile", "Logout"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {user, logout} = useAuth();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const userLogout = () => {
        logout();
        handleCloseUserMenu();
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                    </Link>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: "center" }}>
                                    Категорії
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: "center" }}>
                                    Товари
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography sx={{ textAlign: "center" }}>
                                    Про нас
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Link to="/">
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 2,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Link to="/categories">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Категорії
                            </Button>
                        </Link>
                        <Link to="/products">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Товари
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                Про нас
                            </Button>
                        </Link>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        {user ? (
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={user.avatar ? user.avatar : "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"}
                                    />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <>
                                <Link to="/login">
                                    <Button variant="contained" color="error">
                                        Увійти
                                    </Button>
                                </Link>
                                <Link to="/register">
                                    <Button
                                        sx={{ ml: 2 }}
                                        variant="contained"
                                        color="error"
                                    >
                                        Зареєструватися
                                    </Button>
                                </Link>
                            </>
                        )}
                        {/* <Link to="/login">
                            <Button variant="contained" color="error">
                                Увійти
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button
                                sx={{ ml: 2 }}
                                variant="contained"
                                color="error"
                            >
                                Зареєструватися
                            </Button>
                        </Link> */}
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {<Link to="/profile">
                                <MenuItem
                                    key={settings[0]}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography sx={{ textAlign: "center", color: "black" }}>
                                        {settings[0]}
                                    </Typography>
                                </MenuItem>
                            </Link>}
                            {<MenuItem
                                key={settings[1]}
                                onClick={userLogout}
                            >
                                <Typography sx={{ textAlign: "center" }}>
                                    {settings[1]}
                                </Typography>
                            </MenuItem>}
                            {/* {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
