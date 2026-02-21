import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import video1 from '../assets/videos/vedio 1.mp4';
import video2 from '../assets/videos/vedio 2.mp4';

const HeroSection = () => {
    const navigate = useNavigate();
    const [currentVideo, setCurrentVideo] = useState(0);

    // Local fabrication videos
    const videos = [
        {
            url: video1,
            alt: 'Steel fabrication work'
        },
        {
            url: video2,
            alt: 'Aluminium fabrication work'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideo((prev) => (prev + 1) % videos.length);
        }, 6000); // Change video every 6 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                // Calculate height: 100vh minus top header (64px on mobile, 72px on desktop) minus main navbar (70px on mobile, 90px on desktop)
                height: {
                    xs: 'calc(100vh - 134px)', // Mobile: 100vh - (64px header + 70px navbar)
                    md: 'calc(100vh - 162px)'  // Desktop: 100vh - (72px header + 90px navbar)
                },
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Video Carousel Background */}
            <AnimatePresence>
                {videos.map((video, index) => (
                    currentVideo === index && (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 0,
                            }}
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                key={video.url} // Add key to video to ensure it reloads
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'bottom', // Ensure bottom part is visible
                                }}
                            >
                                <source src={video.url} type="video/mp4" />
                            </video>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Dark Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.55)',
                    zIndex: 1,
                }}
            />

            {/* Hero Content */}
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    px: { xs: 2, md: 4 },
                    py: { xs: 2, md: 0 },
                }}
            >
                {/* Small Top Text */}
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            fontSize: { xs: '0.85rem', md: '1rem' },
                            fontWeight: '500',
                            letterSpacing: '3px',
                            color: '#C0C0C0',
                            mb: { xs: 1, md: 1.5 },
                            display: 'block',
                        }}
                    >
                        Welcome to Ideals Works
                    </Typography>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                            fontWeight: '900',
                            lineHeight: 1.1,
                            mb: { xs: 1, md: 1.5 },
                            textShadow: '2px 2px 15px rgba(0, 0, 0, 0.7)',
                        }}
                    >
                        Aluminium & Steel <span style={{ color: '#14B8A6' }}>Solutions</span>
                    </Typography>
                </motion.div>

                {/* Sub Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.6,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.1rem', sm: '1.4rem', md: '1.8rem' },
                            fontWeight: '700',
                            mb: { xs: 1.5, md: 2 },
                            color: '#ffffff',
                            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        No Compromise on Quality & Durability
                    </Typography>
                </motion.div>

                {/* Paragraph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 0.8,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '0.95rem', md: '1.2rem' },
                            lineHeight: 1.8,
                            maxWidth: '800px',
                            mx: 'auto',
                            mb: { xs: 3, md: 4.5 },
                            color: 'rgba(255, 255, 255, 0.9)',
                            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                        }}
                    >
                        We provide high-quality aluminium and steel fabrication services designed to meet modern architectural and construction needs with strength, precision, and reliability.
                    </Typography>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1.2,
                        delay: 1,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 2, md: 3 },
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        {/* Primary Button */}
                        <Button
                            component={motion.button}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/contact')}
                            sx={{
                                bgcolor: '#14B8A6',
                                color: 'white',
                                px: { xs: 4, md: 6 },
                                py: { xs: 1.5, md: 2.2 },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: '800',
                                borderRadius: '50px',
                                textTransform: 'none',
                                boxShadow: '0 8px 30px rgba(20, 184, 166, 0.3)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    bgcolor: '#0EA5E9',
                                    boxShadow: '0 15px 40px rgba(14, 165, 233, 0.5)',
                                },
                            }}
                        >
                            Get a Free Quote
                        </Button>

                        {/* Secondary Button */}
                        <Button
                            component={motion.button}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/projects')}
                            sx={{
                                borderColor: 'white',
                                color: 'white',
                                px: { xs: 4, md: 6 },
                                py: { xs: 1.5, md: 2.2 },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: '800',
                                borderRadius: '50px',
                                textTransform: 'none',
                                borderWidth: '2px',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                '&:hover': {
                                    borderColor: '#14B8A6',
                                    bgcolor: '#14B8A6',
                                    borderWidth: '2px',
                                    boxShadow: '0 8px 30px rgba(20, 184, 166, 0.3)',
                                },
                            }}
                        >
                            View Our Projects
                        </Button>
                    </Box>
                </motion.div>

                {/* Video Indicators */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1.5,
                        justifyContent: 'center',
                        mt: { xs: 3, md: 4 },
                    }}
                >
                    {videos.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => setCurrentVideo(index)}
                            sx={{
                                width: currentVideo === index ? '40px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                bgcolor: currentVideo === index ? '#14B8A6' : 'rgba(255, 255, 255, 0.5)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: currentVideo === index ? '#14B8A6' : 'rgba(255, 255, 255, 0.8)',
                                },
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;



