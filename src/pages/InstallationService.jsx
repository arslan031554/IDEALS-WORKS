import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InstallationService = () => {
    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    pt: 8
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 900,
                                mb: 1,
                                fontSize: { xs: '3rem', md: '4.5rem' }
                            }}
                        >
                            Installation
                        </Typography>

                        <Breadcrumbs
                            separator="//"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                mb: 3,
                                '& .MuiBreadcrumbs-separator': { mx: 2, fontWeight: 'bold' }
                            }}
                        >

                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Installation</Typography>
                        </Breadcrumbs>

                        <Typography
                            variant="h6"
                            sx={{
                                maxWidth: '700px',
                                fontWeight: '500',
                                lineHeight: 1.6,
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: { xs: '1rem', md: '1.25rem' }
                            }}
                        >
                            Our skilled technicians use modern tools and advanced methods to install aluminium and metal products safely, accurately, and professionally.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Content Section */}
            <Container maxWidth="lg" sx={{ mt: 4, mb: 12, position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 8 },
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.05)',
                        }}
                    >
                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            Our trained technicians use modern tools and advanced techniques to provide safe and professional installation of aluminium and metal products. We understand that proper installation is very important for the safety, durability, and long life of any product. Before starting the work, our team visits your site to carefully check the dimensions, structure, and project requirements. This helps us plan everything correctly and avoid any problems during installation.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            Based on the site assessment, we create a customized installation plan that matches your project needs. We select the right tools, equipment, and installation methods depending on the type of metal products and the site conditions. Our technicians follow strict safety standards and proven methods to ensure accurate, strong, and long-lasting results. We also aim to provide high-quality services at competitive and affordable prices to support our customers.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            After installation, we perform detailed quality checks to make sure everything is properly installed and working as expected. This includes alignment checks, strength testing, and safety verification. Even after the installation is complete, we continue to support our customers by providing maintenance guidance and assistance. Our goal is to ensure complete satisfaction and build long-term trust with reliable service and professional support.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default InstallationService;

