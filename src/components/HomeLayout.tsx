import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { allPages } from '../models/Page';
import { Box, Container, CssBaseline, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { matchPath, Outlet, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useEffect } from 'react';
import NavBarItem from './NavBarItem';

const drawerWidth = 250;

function getSelectedPageIndex(currentPath: string) {
    let index = 0;
    allPages.forEach((page) => {
        const doesMatch = matchPath(page.href, currentPath);
        if (doesMatch) {
            index = allPages.indexOf(page);
        } else if (page.children) {
            page.children.forEach((childPage) => {
                const doesMatch = matchPath(childPage.href, currentPath);
                if (doesMatch) {
                    index = allPages.indexOf(page);
                }
            });
        }
    });

    return index;
}

export default function HomeLayout() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    let location = useLocation();

    const [selectedIndex, setSelectedIndex] = React.useState(getSelectedPageIndex(location.pathname));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        setSelectedIndex(getSelectedPageIndex(location.pathname));
    }, [location]);

    const drawer = (
        <Container disableGutters component="div" sx={{
            backgroundColor: "#F6F5FA"
        }}>
            <Toolbar>
                <img src={logo} alt='logo' style={{ width: '100%' }} />
            </Toolbar>
            <List>
                {allPages.map((page, index) =>
                    <NavBarItem
                        page={page}
                        selectedIndex={selectedIndex}
                        currentIndex={index}
                        setSelectedIndex={setSelectedIndex}
                    />
                )}
            </List>
        </Container>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#D4CDE9",
                    color: "black",
                    display: { sm: 'none' } // hide appbar on desktop
                }}
                elevation={0}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {allPages[selectedIndex].title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                }}
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#F6F5FA" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    backgroundColor: '#F5F5F5',
                    minHeight: '100vh',
                    padding: 0
                }}
            >
                <Toolbar sx={{ display: { sm: 'none' } }} />
                <Outlet />
            </Box>
        </Box>
    );
}