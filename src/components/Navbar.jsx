import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Box, Container, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo as.png';
import { storage } from '../utils/storage';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [productsAnchor, setProductsAnchor] = useState(null);
    const [projectsAnchor, setProjectsAnchor] = useState(null);
    const [servicesAnchor, setServicesAnchor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleProductsClick = (event) => {
        setProductsAnchor(event.currentTarget);
    };

    const handleProjectsClick = (event) => {
        setProjectsAnchor(event.currentTarget);
    };

    const handleServicesClick = (event) => {
        setServicesAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setProductsAnchor(null);
        setProjectsAnchor(null);
        setServicesAnchor(null);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '#', hasDropdown: true },
        { name: 'Services', path: '#', hasDropdown: true },
        { name: 'Projects', path: '#', hasDropdown: true },
        { name: 'Contact Us', path: '/contact' },
    ];

    const productItems = [
        { name: 'Aluminium Products', path: '/aluminium' },
        { name: 'Steel Products', path: '/steel' },
    ];

    const projectItems = [
        { name: 'Aluminium Projects', path: '/aluminium-projects' },
        { name: 'Steel Projects', path: '/steel-projects' },
    ];

    const serviceItems = [
        { name: 'Pre-Order, Survey & Sales', path: '/services/pre-order' },
        { name: 'Installation', path: '/services/installation' },
        { name: 'After-Sales / Repair / Customer Care', path: '/services/after-sales' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#f8f9fa', height: '100%' }}>
            <Box sx={{ py: 3, borderBottom: '1px solid #e0e0e0' }}>
                <img src={logo} alt="Ideal Works Logo" style={{ height: '50px', objectFit: 'contain' }} />
            </Box>
            <List sx={{ px: 2 }}>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                        <Button
                            component={item.path !== '#' ? Link : 'button'}
                            to={item.path !== '#' ? item.path : undefined}
                            fullWidth
                            sx={{
                                justifyContent: 'flex-start',
                                color: location.pathname === item.path ? '#14B8A6' : '#333',
                                fontWeight: location.pathname === item.path ? 'bold' : '500',
                                py: 1.5,
                                px: 2,
                                borderRadius: '8px',
                                '&:hover': {
                                    bgcolor: '#F0F9FF'
                                }
                            }}
                        >
                            {item.name}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {/* Top Header Bar */}
            <Box
                sx={{
                    background: '#FFFFFF',
                    color: '#14B8A6',
                    py: { xs: 2, md: 1.5 },
                    fontSize: { xs: '0.85rem', md: '0.95rem' },
                    borderBottom: '1px solid #F0F9FF',
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'flex-start', md: 'center' },
                            gap: { xs: 1, md: 2 },
                        }}
                    >
                        {/* Left Side - Email */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <EmailIcon sx={{ fontSize: '1.2rem', color: '#14B8A6' }} />
                            <Typography
                                variant="body2"
                                component="a"
                                href="mailto:idealsworks33@gmail.com"
                                sx={{ fontSize: 'inherit', color: '#64748B', fontWeight: '600', textDecoration: 'none', '&:hover': { color: '#14B8A6' } }}
                            >
                                idealsworks33@gmail.com
                            </Typography>
                        </Box>

                        {/* Right Side - Location, Hours, Contact */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                gap: { xs: 1, md: 3 },
                                alignItems: { xs: 'flex-start', md: 'center' },
                            }}
                        >
                            {/* Location */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                <LocationOnIcon sx={{ fontSize: '1.2rem', color: '#14B8A6' }} />
                                <Typography variant="body2" sx={{ fontSize: 'inherit', color: '#64748B', fontWeight: '600' }}>
                                    Lahore, Pakistan
                                </Typography>
                            </Box>

                            {/* Working Hours */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                <AccessTimeIcon sx={{ fontSize: '1.2rem', color: '#14B8A6' }} />
                                <Typography variant="body2" sx={{ fontSize: 'inherit', color: '#64748B', fontWeight: '600' }}>
                                    9 AM to 9 PM
                                </Typography>
                            </Box>

                            {/* Contact Numbers */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                                <PhoneIcon sx={{ fontSize: '1.3rem', opacity: 0.9 }} />
                                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href="tel:03074262167"
                                        sx={{
                                            fontSize: 'inherit',
                                            color: '#64748B',
                                            fontWeight: '600',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: '#14B8A6',
                                                transform: 'translateY(-1px)',
                                            }
                                        }}
                                    >
                                        03074262167
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#d0d0d0' }}>|</Typography>
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href="tel:03024582473"
                                        sx={{
                                            fontSize: 'inherit',
                                            color: '#64748B',
                                            fontWeight: '500',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: '#14B8A6',
                                                transform: 'translateY(-1px)',
                                            }
                                        }}
                                    >
                                        03024582473
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#d0d0d0' }}>|</Typography>
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href="tel:03054688433"
                                        sx={{
                                            fontSize: 'inherit',
                                            color: '#64748B',
                                            fontWeight: '500',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: '#14B8A6',
                                                transform: 'translateY(-1px)',
                                            }
                                        }}
                                    >
                                        03054688433
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Main Navbar */}
            <AppBar
                component={motion.header}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                position="sticky"
                elevation={scrolled ? 4 : 0}
                sx={{
                    bgcolor: 'white',
                    backdropFilter: 'blur(10px)',
                    color: '#0F172A',
                    top: 0,
                    zIndex: 1100,
                    transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
                    borderBottom: scrolled ? 'none' : '1px solid #F0F9FF',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ minHeight: { xs: '70px', md: '90px' }, py: 1 }}>
                        {/* Logo - Left */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                                textDecoration: 'none',
                                mr: 4,
                            }}
                        >
                            <img
                                src={logo}
                                alt="Ideal Works Logo"
                                style={{
                                    height: scrolled ? '65px' : '50px',
                                    transition: 'all 0.3s ease',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                onClick={handleDrawerToggle}
                                sx={{ color: '#14B8A6' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true,
                                }}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>

                        {/* Mobile Logo */}
                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                alignItems: 'center',
                                textDecoration: 'none',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={logo}
                                alt="Ideal Works Logo"
                                style={{
                                    height: '30px',
                                    objectFit: 'contain'
                                }}
                            />
                        </Box>

                        {/* Navigation Links - Center */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 0.5 }}>
                            {navItems.map((item) => (
                                <React.Fragment key={item.name}>
                                    {item.name === 'Products' ? (
                                        <>
                                            <Button
                                                onClick={handleProductsClick}
                                                endIcon={<KeyboardArrowDownIcon sx={{
                                                    transform: productsAnchor ? 'rotate(180deg)' : 'none',
                                                    transition: 'transform 0.3s ease'
                                                }} />}
                                                sx={{
                                                    color: '#0F172A',
                                                    fontWeight: '700',
                                                    fontSize: '1.05rem',
                                                    px: 2,
                                                    py: 1,
                                                    textTransform: 'none',
                                                    position: 'relative',
                                                    '&:after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        width: '0%',
                                                        height: '3px',
                                                        bottom: '6px',
                                                        left: '0',
                                                        bgcolor: '#14B8A6',
                                                        transition: 'all 0.3s ease',
                                                        transform: 'translateX(-50%)',
                                                    },
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        '&:after': {
                                                            width: '70%',
                                                        }
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Button>
                                            <Menu
                                                anchorEl={productsAnchor}
                                                open={Boolean(productsAnchor)}
                                                onClose={handleClose}
                                                TransitionProps={{ timeout: 400 }}
                                                sx={{
                                                    '& .MuiPaper-root': {
                                                        mt: 1.5,
                                                        minWidth: 220,
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                        borderRadius: '12px',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        overflow: 'hidden',
                                                        transformOrigin: 'top center',
                                                    }
                                                }}
                                            >
                                                {productItems.map((product) => (
                                                    <MenuItem
                                                        key={product.name}
                                                        component={Link}
                                                        to={product.path}
                                                        onClick={handleClose}
                                                        sx={{
                                                            py: 1.5,
                                                            px: 2.5,
                                                            fontWeight: '700',
                                                            color: '#0F172A',
                                                            '&:hover': {
                                                                bgcolor: '#F0F9FF',
                                                                color: '#14B8A6',
                                                            }
                                                        }}
                                                    >
                                                        {product.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    ) : item.name === 'Projects' ? (
                                        <>
                                            <Button
                                                onClick={handleProjectsClick}
                                                endIcon={<KeyboardArrowDownIcon sx={{
                                                    transform: projectsAnchor ? 'rotate(180deg)' : 'none',
                                                    transition: 'transform 0.3s ease'
                                                }} />}
                                                sx={{
                                                    color: '#0F172A',
                                                    fontWeight: '700',
                                                    fontSize: '1.05rem',
                                                    px: 2,
                                                    py: 1,
                                                    textTransform: 'none',
                                                    position: 'relative',
                                                    '&:after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        width: '0%',
                                                        height: '3px',
                                                        bottom: '6px',
                                                        left: '0',
                                                        bgcolor: '#14B8A6',
                                                        transition: 'all 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        '&:after': {
                                                            width: '70%',
                                                        }
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Button>
                                            <Menu
                                                anchorEl={projectsAnchor}
                                                open={Boolean(projectsAnchor)}
                                                onClose={handleClose}
                                                TransitionProps={{ timeout: 400 }}
                                                sx={{
                                                    '& .MuiPaper-root': {
                                                        mt: 1.5,
                                                        minWidth: 220,
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                        borderRadius: '12px',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        overflow: 'hidden',
                                                        transformOrigin: 'top center',
                                                    }
                                                }}
                                            >
                                                {projectItems.map((project) => (
                                                    <MenuItem
                                                        key={project.name}
                                                        component={Link}
                                                        to={project.path}
                                                        onClick={handleClose}
                                                        sx={{
                                                            py: 1.5,
                                                            px: 2.5,
                                                            '&:hover': {
                                                                bgcolor: '#F0F9FF',
                                                                color: '#14B8A6',
                                                            }
                                                        }}
                                                    >
                                                        {project.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    ) : item.name === 'Services' ? (
                                        <>
                                            <Button
                                                onClick={handleServicesClick}
                                                endIcon={<KeyboardArrowDownIcon sx={{
                                                    transform: servicesAnchor ? 'rotate(180deg)' : 'none',
                                                    transition: 'transform 0.3s ease'
                                                }} />}
                                                sx={{
                                                    color: '#0F172A',
                                                    fontWeight: '700',
                                                    fontSize: '1.05rem',
                                                    px: 2,
                                                    py: 1,
                                                    textTransform: 'none',
                                                    position: 'relative',
                                                    '&:after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        width: '0%',
                                                        height: '3px',
                                                        bottom: '6px',
                                                        left: '0',
                                                        bgcolor: '#14B8A6',
                                                        transition: 'all 0.3s ease',
                                                    },
                                                    '&:hover': {
                                                        bgcolor: 'transparent',
                                                        '&:after': {
                                                            width: '70%',
                                                        }
                                                    },
                                                }}
                                            >
                                                {item.name}
                                            </Button>
                                            <Menu
                                                anchorEl={servicesAnchor}
                                                open={Boolean(servicesAnchor)}
                                                onClose={handleClose}
                                                TransitionProps={{ timeout: 400 }}
                                                sx={{
                                                    '& .MuiPaper-root': {
                                                        mt: 1.5,
                                                        minWidth: 220,
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                        borderRadius: '12px',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        overflow: 'hidden',
                                                        transformOrigin: 'top center',
                                                    }
                                                }}
                                            >
                                                {serviceItems.map((service) => (
                                                    <MenuItem
                                                        key={service.name}
                                                        component={Link}
                                                        to={service.path}
                                                        onClick={handleClose}
                                                        sx={{
                                                            py: 1.5,
                                                            px: 2.5,
                                                            fontWeight: '700',
                                                            color: '#0F172A',
                                                            '&:hover': {
                                                                bgcolor: '#F0F9FF',
                                                                color: '#14B8A6',
                                                            }
                                                        }}
                                                    >
                                                        {service.name}
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    ) : (
                                        <Button
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                color: '#0F172A',
                                                fontWeight: '700',
                                                fontSize: '1.05rem',
                                                px: 2,
                                                py: 1,
                                                textTransform: 'none',
                                                position: 'relative',
                                                '&:after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    width: location.pathname === item.path ? '70%' : '0%',
                                                    height: '3px',
                                                    bottom: '6px',
                                                    left: '0',
                                                    bgcolor: '#14B8A6',
                                                    transition: 'all 0.3s ease',
                                                },
                                                '&:hover': {
                                                    bgcolor: 'transparent',
                                                    '&:after': {
                                                        width: '70%',
                                                    }
                                                },
                                            }}
                                        >
                                            {item.name}
                                        </Button>
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>

                        {/* Contact Button - Right */}
                        <Button
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variant="contained"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                bgcolor: '#14B8A6',
                                color: 'white',
                                px: 3.5,
                                py: 1.4,
                                borderRadius: '12px',
                                boxShadow: '0 4px 14px rgba(20, 184, 166, 0.3)',
                                textTransform: 'none',
                                fontWeight: '700',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#0EA5E9',
                                    boxShadow: '0 6px 20px rgba(14, 165, 233, 0.4)',
                                },
                            }}
                            onClick={() => navigate('/contact')}
                        >
                            Contact Us
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Navbar;



