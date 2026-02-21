import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AfterSalesService = () => {
    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600")',
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
                                fontSize: { xs: '2rem', md: '3.5rem' }
                            }}
                        >
                            After-Sales / Repair / <Box component="span" sx={{ color: '#F472B6' }}>Customer Care</Box>
                        </Typography>

                        <Breadcrumbs
                            separator="//"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                mb: 3,
                                '& .MuiBreadcrumbs-separator': { mx: 2, fontWeight: 'bold' }
                            }}
                        >

                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>After-Sales / Repair / Customer Care</Typography>
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
                            With our dedicated customer support, you get a reliable long-term partner who is committed to your satisfaction and success.
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
                            Our dedicated customer care team is available 24/7 to support you whenever you need help. We continue to assist you even after the sale is complete because your satisfaction is our top priority. If you face any issues or have questions about your products, our team is always ready to guide you and provide quick and reliable solutions. We are committed to giving you peace of mind and long-term support.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            Our expert technicians can help you with product questions, warranty support, repairs, and usage guidance. Even after years, we are available to repair or replace damaged parts and restore your products to proper working condition. Whether it is structural repair, part replacement, or surface maintenance, we use modern techniques and professional methods to ensure quality and durability.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            Our customer care service helps you maintain your aluminium and metal products, increase their lifespan, and protect your investment. We also provide inspections, maintenance guidance, and performance support to keep your products in excellent condition. Our trained team responds quickly and offers expert advice whenever needed, ensuring you always have a trusted partner to support you throughout the life of your products.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AfterSalesService;

