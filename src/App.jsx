import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Fab, Zoom, useScrollTrigger, ThemeProvider, createTheme, CssBaseline, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { KeyboardArrowUp, WhatsApp } from '@mui/icons-material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Aluminium from './pages/Aluminium';
import Steel from './pages/Steel';
import AluminiumProjects from './pages/AluminiumProjects';
import SteelProjects from './pages/SteelProjects';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import PreOrderService from './pages/PreOrderService';
import InstallationService from './pages/InstallationService';
import AfterSalesService from './pages/AfterSalesService';
import { initStorage } from './utils/storage';
import { colors } from './config/colors';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 99 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const theme = createTheme({
  typography: {
    fontFamily: '"Outfit", "Inter", "system-ui", "sans-serif"',
    h1: { fontFamily: '"Outfit", sans-serif', fontWeight: 900 },
    h2: { fontFamily: '"Outfit", sans-serif', fontWeight: 800 },
    h3: { fontFamily: '"Outfit", sans-serif', fontWeight: 800 },
    h4: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h5: { fontFamily: '"Outfit", sans-serif', fontWeight: 700 },
    h6: { fontFamily: '"Outfit", sans-serif', fontWeight: 600 },
    overline: { letterSpacing: '0.2em', fontWeight: 700 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  palette: {
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.white,
    },
    background: {
      default: colors.white,
      paper: colors.white,
    },
    text: {
      primary: colors.dark,
      secondary: colors.gray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: colors.secondary,
            transform: 'y(-2px)',
          },
        },
      },
    },
  },
});

function App() {
  useEffect(() => {
    initStorage();
  }, []);

  const whatsappNumbers = [
    { label: 'Aluminium Inquiries', number: '+923074262167' },
    { label: 'Steel Inquiries', number: '+923054688433' },
  ];

  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <div id="back-to-top-anchor" />
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1, overflowX: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/aluminium" element={<Aluminium />} />
                <Route path="/steel" element={<Steel />} />
                <Route path="/aluminium-projects" element={<AluminiumProjects />} />
                <Route path="/steel-projects" element={<SteelProjects />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/pre-order" element={<PreOrderService />} />
                <Route path="/services/installation" element={<InstallationService />} />
                <Route path="/services/after-sales" element={<AfterSalesService />} />
                <Route path="/honor-admin" element={<Admin />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Box>
        <Footer />

        {/* Scroll to top button */}
        <ScrollTop>
          <Fab size="small" aria-label="scroll back to top" sx={{ bgcolor: 'primary.main', color: 'white', '&:hover': { bgcolor: 'primary.dark' } }}>
            <KeyboardArrowUp />
          </Fab>
        </ScrollTop>

        {/* Floating WhatsApp Menu */}
        <SpeedDial
          ariaLabel="WhatsApp Support"
          sx={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            '& .MuiSpeedDialAction-staticTooltipLabel': {
              width: '140px',
              textAlign: 'center',
              fontWeight: 'bold',
              bgcolor: '#14B8A6',
              color: 'white'
            }
          }}
          icon={<SpeedDialIcon icon={<WhatsApp />} openIcon={<WhatsApp />} />}
          FabProps={{
            color: 'success',
            sx: { bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' }, width: 65, height: 65 }
          }}
        >
          {whatsappNumbers.map((action) => (
            <SpeedDialAction
              key={action.label}
              icon={<WhatsApp sx={{ color: '#25D366' }} />}
              tooltipTitle={action.label}
              tooltipOpen
              tooltipPlacement="right"
              FabProps={{
                sx: {
                  bgcolor: 'white',
                  '&:hover': { bgcolor: '#f0f0f0' }
                }
              }}
              onClick={() => window.open(`https://wa.me/${action.number.replace(/\s+/g, '')}`, '_blank')}
            />
          ))}
        </SpeedDial>
      </Box>
    </ThemeProvider>
  );
}

export default App;



