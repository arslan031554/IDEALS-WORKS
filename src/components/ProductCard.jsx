import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Card
            component={motion.div}
            whileHover={{
                y: -12,
                boxShadow: '0 25px 50px -12px rgba(20, 184, 166, 0.25)',
                borderColor: 'rgba(20, 184, 166, 0.3)'
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                height: 520,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #f1f5f9',
                overflow: 'hidden',
                bgcolor: 'white',
                transition: 'border-color 0.4s ease'
            }}
        >
            <Box sx={{ overflow: 'hidden', height: 240, position: 'relative', bgcolor: '#f1f5f9' }}>
                <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.15, filter: 'brightness(1.05)' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"; // Fallback image
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.05))',
                        pointerEvents: 'none'
                    }}
                />
            </Box>
            <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box mb={2}>
                    <Chip
                        label={product.category}
                        size="small"
                        sx={{
                            bgcolor: 'rgba(20, 184, 166, 0.08)',
                            color: '#14B8A6',
                            fontWeight: 700,
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}
                    />
                </Box>
                <Typography gutterBottom variant="h6" component="div" fontWeight="800" sx={{ lineHeight: 1.2, mb: 1, color: '#0f172a', minHeight: '2.4em', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineClamp: 3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>
                    {product.description}
                </Typography>
            </CardContent>
            <Box sx={{ p: 3, pt: 0 }}>
                <Button
                    variant="contained"
                    fullWidth
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    sx={{
                        bgcolor: '#14B8A6',
                        color: 'white',
                        borderRadius: '10px',
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 700,
                        boxShadow: 'none',
                        '&:hover': {
                            bgcolor: '#0EA5E9',
                            boxShadow: '0 8px 20px rgba(14, 165, 233, 0.3)',
                        }
                    }}
                    onClick={() => navigate('/product/' + product.id, { state: { product } })}
                >
                    View Details
                </Button>
            </Box>
        </Card>
    );
};

export default ProductCard;



