import React from 'react';
import { Box, Container, Typography, Grid, Button, Paper, Chip, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { WhatsApp, Phone, CheckCircle, ArrowBack, Info, Email } from '@mui/icons-material';
import { aluminiumData } from '../data/aluminiumData';
import { steelData } from '../data/steelData';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Try to find product from state first, then search in data
    let product = location.state?.product;

    if (!product) {
        const allProducts = [...aluminiumData, ...steelData];
        product = allProducts.find(p => p.id.toString() === id);
    }

    if (!product) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Product Not Found</Typography>
                <Button onClick={() => navigate('/')} sx={{ mt: 2 }} variant="contained">Go Home</Button>
            </Container>
        )
    }

    const isAluminium = aluminiumData.some(p => p.id === product.id);
    const whatsappNumber = isAluminium ? "923074262167" : "923054688433";

    return (
        <Box sx={{ py: 6 }}>
            <Container maxWidth="lg">
                <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
                    Back to Products
                </Button>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: '1fr 1fr'
                        },
                        gap: 6
                    }}
                >
                    <Box>
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                bgcolor: '#f8fafc',
                                border: '1px solid #e2e8f0',
                                position: 'sticky',
                                top: 100
                            }}
                        >
                            <Box
                                component="img"
                                src={product.image}
                                alt={product.name}
                                sx={{
                                    width: '100%',
                                    height: { xs: 300, md: 500 },
                                    objectFit: 'cover',
                                }}
                            />
                        </Paper>
                    </Box>

                    <Box>
                        <Box sx={{ mb: 4 }}>
                            <Chip
                                label={product.category}
                                sx={{
                                    bgcolor: '#14B8A615',
                                    color: '#14B8A6',
                                    fontWeight: 'bold',
                                    mb: 2,
                                    borderRadius: '8px'
                                }}
                            />
                            <Typography variant="h3" fontWeight="900" gutterBottom sx={{ color: '#1e293b' }}>
                                {product.name}
                            </Typography>
                            <Typography variant="h5" color="primary" fontWeight="700" sx={{ mb: 3 }}>
                                {product.price}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                {product.description}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 6 }}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#1e293b' }}>
                                <Info sx={{ color: '#14B8A6' }} /> Key Specifications
                            </Typography>
                            <List sx={{ pt: 1 }}>
                                {(product.features || product.specs || []).map((spec, i) => (
                                    <ListItem key={i} sx={{ px: 0, py: 0.5, borderBottom: '1px solid #f1f5f9' }}>
                                        <ListItemIcon sx={{ minWidth: 28 }}>
                                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#14B8A6' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={spec}
                                            primaryTypographyProps={{
                                                variant: 'body2',
                                                fontWeight: 500,
                                                color: '#334155'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                                {(!product.features && !product.specs) && (
                                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                                        No specifications listed for this product.
                                    </Typography>
                                )}
                            </List>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<WhatsApp />}
                                sx={{
                                    flex: 1,
                                    bgcolor: '#25D366',
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    borderRadius: '12px',
                                    '&:hover': { bgcolor: '#128C7E' }
                                }}
                                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=I'm interested in ${product.name}`, '_blank')}
                            >
                                Inquiry on WhatsApp
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<Email />}
                                sx={{
                                    flex: 1,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    borderRadius: '12px',
                                    borderColor: '#14B8A6',
                                    color: '#14B8A6'
                                }}
                                onClick={() => navigate('/contact', { state: { product: product.name } })}
                            >
                                Contact Sales
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default ProductDetail;



