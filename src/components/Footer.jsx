import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink, IconButton, Stack } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { icon: <Facebook fontSize="small" />, color: '#1877F2', link: '#' },
        { icon: <Instagram fontSize="small" />, color: '#E4405F', link: '#' },
        { icon: <WhatsApp fontSize="small" />, color: '#25D366', link: 'https://wa.me/923054688433' }
    ];

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Aluminium Products', path: '/aluminium' },
        { name: 'Steel Products', path: '/steel' },
        { name: 'Aluminium Projects', path: '/aluminium-projects' },
        { name: 'Steel Projects', path: '/steel-projects' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <Box
            component="footer"
            sx={{
                background: 'linear-gradient(135deg, #0F172A 0%, #020617 100%)',
                color: 'slate.300',
                pt: { xs: 8, md: 10 },
                pb: 4,
                mt: 'auto',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #14B8A6, #0EA5E9)',
                }
            }}
        >
            {/* Subtle background pattern/glow */}
            <Box sx={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 6, md: 8 }}>
                    {/* Brand Section */}
                    <Grid item xs={12} md={4}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="h5"
                                color="white"
                                sx={{
                                    fontWeight: '900',
                                    letterSpacing: 2,
                                    mb: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5
                                }}
                            >
                                <Box sx={{ width: 40, height: 4, bgcolor: '#14B8A6', borderRadius: 2 }} />
                                IDEAL WORKS
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.8, mb: 4, maxWidth: '350px' }}>
                                Crafting excellence in metal. Premier providers of architectural aluminium
                                and structural steel solutions for futuristic spaces.
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                {socialLinks.map((social, i) => (
                                    <motion.div key={i} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.9 }}>
                                        <IconButton
                                            component="a"
                                            href={social.link}
                                            target="_blank"
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.03)',
                                                color: 'white',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                backdropFilter: 'blur(10px)',
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    bgcolor: social.color,
                                                    borderColor: social.color,
                                                    boxShadow: `0 0 15px ${social.color}44`
                                                }
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    </motion.div>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            variant="h6"
                            color="white"
                            gutterBottom
                            sx={{ fontWeight: '800', mb: 3, position: 'relative', display: 'inline-block' }}
                        >
                            Quick Exploration
                            <Box sx={{ width: '30%', height: '2px', bgcolor: '#14B8A6', mt: 1 }} />
                        </Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="column" gap={1.8}>
                                    {quickLinks.map((link, index) => (
                                        <motion.div key={index} whileHover={{ x: 8 }} transition={{ type: 'spring', stiffness: 300 }}>
                                            <MuiLink
                                                component={Link}
                                                to={link.path}
                                                sx={{
                                                    textDecoration: 'none',
                                                    color: '#94a3b8',
                                                    fontSize: '0.95rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    transition: 'color 0.2s',
                                                    '&:hover': { color: '#14B8A6' },
                                                    '&::before': {
                                                        content: '""',
                                                        width: 0,
                                                        height: '1px',
                                                        bgcolor: '#14B8A6',
                                                        transition: 'width 0.3s'
                                                    },
                                                    '&:hover::before': { width: '12px' }
                                                }}
                                            >
                                                {link.name}
                                            </MuiLink>
                                        </motion.div>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography
                            variant="h6"
                            color="white"
                            gutterBottom
                            sx={{ fontWeight: '800', mb: 3, position: 'relative', display: 'inline-block' }}
                        >
                            Get In Touch
                            <Box sx={{ width: '30%', height: '2px', bgcolor: '#14B8A6', mt: 1 }} />
                        </Typography>

                        <Stack spacing={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                <Box sx={{
                                    width: 44, height: 44, borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6',
                                    border: '1px solid rgba(20, 184, 166, 0.2)'
                                }}>
                                    <LocationOn fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Head Office</Typography>
                                    <Typography variant="body2" sx={{ color: '#f8fafc' }}>Lahore, Pakistan</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                <Box sx={{
                                    width: 44, height: 44, borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6',
                                    border: '1px solid rgba(20, 184, 166, 0.2)'
                                }}>
                                    <Phone fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Call US</Typography>
                                    <Typography variant="body2" sx={{ color: '#f8fafc' }}>+92 307 4262167</Typography>
                                    <Typography variant="body2" sx={{ color: '#f8fafc' }}>+92 305 4688433</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                                <Box sx={{
                                    width: 44, height: 44, borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6',
                                    border: '1px solid rgba(20, 184, 166, 0.2)'
                                }}>
                                    <Email fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>Email Support</Typography>
                                    <Typography
                                        variant="body2"
                                        component="a"
                                        href="mailto:idealsworks33@gmail.com"
                                        sx={{ color: '#f8fafc', textDecoration: 'none', '&:hover': { color: '#14B8A6' } }}
                                    >
                                        idealsworks33@gmail.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box
                    sx={{
                        mt: 8, pt: 4,
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                        &copy; {new Date().getFullYear()} <Box component="span" sx={{ color: '#14B8A6', fontWeight: 700 }}>Ideal Works</Box>. Crafted with Precision.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        <MuiLink href="#" sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#14B8A6' } }}>Privacy Policy</MuiLink>
                        <MuiLink href="#" sx={{ color: '#64748b', fontSize: '0.85rem', textDecoration: 'none', '&:hover': { color: '#14B8A6' } }}>Terms of Service</MuiLink>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;



