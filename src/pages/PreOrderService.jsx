import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link as MuiLink, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreOrderService = () => {
    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600")',
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
                                fontSize: { xs: '2.5rem', md: '4rem' }
                            }}
                        >
                            Pre-Order, Survey <Box component="span" sx={{ color: '#F472B6' }}>& Sales</Box>
                        </Typography>

                        <Breadcrumbs
                            separator="//"
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                mb: 3,
                                '& .MuiBreadcrumbs-separator': { mx: 2, fontWeight: 'bold' }
                            }}
                        >

                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Pre-Order, Survey & Sales</Typography>
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
                            Our expert team provides friendly guidance and detailed site inspections to help you choose and buy the right products for your project.
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
                            We are committed to providing excellent service and full support to our customers from the beginning of their construction journey. Our pre-order service allows customers to reserve aluminium and metal products in advance, which is especially helpful for large projects and tight deadlines. This helps prevent delays, ensures material availability, and keeps your project running smoothly and on schedule.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            We also offer professional survey services where our expert team visits your site to carefully study your project requirements. After a detailed analysis, we provide the best recommendations and guide you in choosing the right materials, designs, sizes, and colors. Our goal is to help you make the best decisions that match your architectural needs, budget, and project goals.
                        </Typography>

                        <Typography variant="body1" sx={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                            Once you finalize your order, we ensure the delivery of high-quality products through a reliable and efficient process. From consultation to delivery, our team provides continuous guidance, quick support, and professional service. We focus on making the entire process simple, smooth, and stress-free while ensuring complete customer satisfaction at every stage.
                        </Typography>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
};

export default PreOrderService;

