import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, image, link, fullWidth = false }) => {
    const navigate = useNavigate();

    return (
        <Card
            component={motion.div}
            whileHover={{
                y: -15, // Lift effect
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => navigate(link)}
            sx={{
                position: 'relative',
                height: { xs: 300, sm: 350, md: 400 }, // Reduced height
                cursor: 'pointer',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                border: 'none',
                width: '100%',
                display: 'block',
            }}
        >
            <CardMedia
                component={motion.img}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                image={image}
                alt={title}
                sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85)',
                }}
            />
            <Box
                className="overlay"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: { xs: 2, md: 4 },
                    color: 'white',
                    textAlign: 'center',
                    transition: 'background 0.3s ease',
                    '&:hover': {
                        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%)',
                    }
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography
                        variant="h2"
                        component="div"
                        fontWeight="900"
                        sx={{
                            mb: 0, // Removed bottom margin
                            textShadow: '0 4px 12px rgba(0,0,0,0.6)',
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, // Slightly smaller max size
                            letterSpacing: '0.05em',
                            fontFamily: '"Bebas Neue", cursive',
                            lineHeight: 1,
                        }}
                    >
                        {title}
                    </Typography>
                </motion.div>
            </Box>
        </Card>
    );
};

export default CategoryCard;
