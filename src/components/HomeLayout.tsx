import { ReactElement, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { allPages } from '../models/Page';
import { Box, Breadcrumbs, Container, CssBaseline, Drawer, IconButton, List, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useLocation } from 'react-router-dom';
import { ReactComponent as LogoComponent } from '../assets/logo.svg';
import { useEffect } from 'react';
import NavBarItem from './NavBarItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeHeader from './HomeHeader';
import { breadcrumbsForPage, getSelectedPageIndex } from '../utils/PageUtils';

const drawerWidth = 270;

export default function HomeLayout() {

    const [mobileOpen, setMobileOpen] = useState(false);

    let location = useLocation();

    const [selectedIndex, setSelectedIndex] = useState(getSelectedPageIndex(location.pathname));
    const [breadcrumbs, setBreadcrumbs] = useState<ReactElement[]>([]);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        setSelectedIndex(getSelectedPageIndex(location.pathname));
    }, [location]);

    useEffect(() => {
        setBreadcrumbs(breadcrumbsForPage(selectedIndex, location.pathname));
    }, [selectedIndex, setBreadcrumbs, location.pathname]);

    const drawer = (
        <Container disableGutters component="div" sx={{
            backgroundColor: "#F6F5FA"
        }}>
            <Toolbar>
                <LogoComponent style={{ width: '100%' }} />
            </Toolbar>
            <List disablePadding>
                {allPages.map((page, index) =>
                    <NavBarItem
                        key={page.title}
                        page={page}
                        selectedPageIndex={selectedIndex}
                        currentPageIndex={index}
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
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    minHeight: '100vh',
                    padding: 0,
                    backgroundColor: "#FAFBFC"
                }}
            >
                <HomeHeader />
                <Toolbar sx={{ display: { sm: 'none' } }} />
                <Box sx={{ padding: 4 }}>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
                        {breadcrumbs}
                    </Breadcrumbs>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}