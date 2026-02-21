import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardActionArea, CardMedia, CardContent, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import { storage, ALUMINIUM_CATEGORIES, STEEL_CATEGORIES } from '../utils/storage';
import { Engineering, DesignServices, SupportAgent, VerifiedUser, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Category image map for Aluminium categories
const ALUMINIUM_CATEGORY_IMAGES = {
    "Aluminium Windows": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    "Double Glazed": "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=800",
    "Single Glazed": "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
    "12mm Glass Work": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
    "Shower Cabins": "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    "Looking Glass": "https://images.unsplash.com/photo-1620626011761-996317702782?auto=format&fit=crop&q=80&w=800",
    "Partitions": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
};

// Category image map for Steel categories
const STEEL_CATEGORY_IMAGES = {
    "Gates": "https://picsum.photos/seed/gates/800/500",
    "Safety Grills": "https://picsum.photos/seed/grills/800/500",
    "Spiral Stairs": "https://picsum.photos/seed/spiralstairs/800/500",
    "Main Stairs": "https://picsum.photos/seed/mainstairs/800/500",
    "Fiberglass Shades": "https://picsum.photos/seed/fiberglass/800/500",
    "Tensile Fabric Shades": "https://picsum.photos/seed/tensile/800/500",
    "Stainless Steel Railings": "https://picsum.photos/seed/railings/800/500",
};

const CategoryCardItem = ({ name, image, accentColor, onClick }) => (
    <Card
        component={motion.div}
        whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(0,0,0,0.13)' }}
        transition={{ duration: 0.3 }}
        sx={{
            height: '100%',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid #f1f5f9',
            display: 'flex',
            flexDirection: 'column',
        }}
        onClick={onClick}
        elevation={0}
    >
        <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <motion.img
                src={image}
                alt={name}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{ height: 180, width: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"; }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2.5 }}>
                <Typography
                    variant="subtitle1"
                    fontWeight="700"
                    textAlign="center"
                    sx={{ color: '#1e293b', lineHeight: 1.3, minHeight: '2.6em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
        <Box sx={{ height: '4px', width: '100%', bgcolor: accentColor, flexShrink: 0 }} />
    </Card>
);

const ExploreMoreCard = ({ accentColor, onClick, label }) => (
    <Box
        sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2
        }}
    >
        <IconButton
            onClick={onClick}
            sx={{
                width: 70,
                height: 70,
                bgcolor: `${accentColor}10`,
                color: accentColor,
                border: `2px solid ${accentColor}30`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: accentColor,
                    color: 'white',
                    transform: 'rotate(45deg) scale(1.1)',
                    boxShadow: `0 12px 24px ${accentColor}40`
                }
            }}
        >
            <ArrowForward sx={{ fontSize: 32 }} />
        </IconButton>
        <Typography
            variant="caption"
            fontWeight="900"
            sx={{
                mt: 2,
                color: '#1e293b',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.65rem'
            }}
        >
            {label || 'View All'}
        </Typography>
    </Box>
);

const Home = () => {
    const navigate = useNavigate();

    const features = [
        { icon: <Engineering fontSize="large" sx={{ color: '#14B8A6' }} />, title: 'Expert Craftsmanship', desc: 'Over 20 years of experience in metal works.' },
        { icon: <DesignServices fontSize="large" sx={{ color: '#14B8A6' }} />, title: 'Custom Designs', desc: 'Tailored solutions to match your specific needs.' },
        { icon: <SupportAgent fontSize="large" sx={{ color: '#14B8A6' }} />, title: '24/7 Support', desc: 'Always here to help with your queries.' },
        { icon: <VerifiedUser fontSize="large" sx={{ color: '#14B8A6' }} />, title: 'Quality Guarantee', desc: 'Premium materials and durable construction.' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    // Pick first 3 from each category list
    const aluminiumCats = storage.ALUMINIUM_CATEGORIES.slice(0, 3);
    const steelCats = storage.STEEL_CATEGORIES.slice(0, 3);

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection />

            {/* Main Categories - Full Width 50/50 Split */}
            <Box sx={{ pt: 6, pb: 0, overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h4" component="h2" textAlign="center" fontWeight="800" sx={{ mb: 4, color: '#1e293b' }}>
                            Our Core Expertise
                        </Typography>
                    </motion.div>
                </Container>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: '100%',
                        m: 0,
                        p: { xs: 1, md: 3 },
                        gap: 0,
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '50%' }, flex: '0 0 auto', p: { xs: 1, md: 1.5 } }}>
                        <CategoryCard
                            title="Aluminium Products"
                            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                            link="/aluminium"
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '50%' }, flex: '0 0 auto', p: { xs: 1, md: 1.5 } }}>
                        <CategoryCard
                            title="Steel Products"
                            image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                            link="/steel"
                            fullWidth
                        />
                    </Box>
                </Box>
            </Box>

            {/* Why Choose Us */}
            <Box sx={{ bgcolor: '#F0F9FF', py: 6 }}>
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h4" component="h2" textAlign="center" fontWeight="800" sx={{ mb: 4, color: '#1e293b' }}>
                            Why Choose Us
                        </Typography>
                    </motion.div>
                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(4, 1fr)'
                            },
                            gap: 3
                        }}
                    >
                        {features.map((feature, index) => (
                            <Box
                                key={index}
                                component={motion.div}
                                variants={itemVariants}
                                sx={{ display: 'flex' }}
                            >
                                <Box sx={{
                                    textAlign: 'center',
                                    p: { xs: 3, md: 4 },
                                    bgcolor: 'white',
                                    borderRadius: 5,
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                    border: '1px solid rgba(0,0,0,0.02)',
                                    '&:hover': {
                                        transform: 'translateY(-12px) scale(1.02)',
                                        boxShadow: '0 25px 50px rgba(20, 184, 166, 0.15)',
                                    }
                                }}>
                                    <Box sx={{ mb: 3, display: 'inline-flex', p: 2.5, bgcolor: '#F0F9FF', borderRadius: '20px', '.MuiSvgIcon-root': { fontSize: 40 } }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography variant="h6" fontWeight="800" gutterBottom sx={{ color: '#1e293b', mb: 2 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                                        {feature.desc}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Category Showcase Section */}
            <Box sx={{ py: 8, bgcolor: 'white' }}>
                <Container maxWidth="xl" sx={{ px: { xs: 2, md: 10, lg: 15 } }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            textAlign="center"
                            fontWeight="900"
                            sx={{ mb: 8, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            FEATURED CATEGORIES
                        </Typography>
                    </motion.div>

                    {/* Aluminium Row */}
                    <Box sx={{ mb: 8 }}>
                        <Typography variant="h5" fontWeight="800" sx={{ mb: 3, color: '#14B8A6', borderLeft: '5px solid #14B8A6', pl: 2 }}>
                            Aluminium Solutions
                        </Typography>
                        <Box
                            component={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(4, 1fr)',
                                },
                                gap: 3,
                            }}
                        >
                            {aluminiumCats.map((cat) => (
                                <Box key={cat} component={motion.div} variants={itemVariants}>
                                    <CategoryCardItem
                                        key={cat}
                                        name={cat}
                                        image={ALUMINIUM_CATEGORY_IMAGES[cat] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"}
                                        accentColor="#14B8A6"
                                        onClick={() => navigate('/aluminium')}
                                    />
                                </Box>
                            ))}
                            <Box component={motion.div} variants={itemVariants}>
                                <ExploreMoreCard
                                    accentColor="#14B8A6"
                                    onClick={() => navigate('/aluminium')}
                                    label="Explore Aluminium"
                                />
                            </Box>
                        </Box>
                    </Box>

                    {/* Steel Row */}
                    <Box>
                        <Typography variant="h5" fontWeight="800" sx={{ mb: 3, color: '#0EA5E9', borderLeft: '5px solid #0EA5E9', pl: 2 }}>
                            Steel Solutions
                        </Typography>
                        <Box
                            component={motion.div}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    md: 'repeat(4, 1fr)',
                                },
                                gap: 3,
                            }}
                        >
                            {steelCats.map((cat) => (
                                <Box key={cat} component={motion.div} variants={itemVariants}>
                                    <CategoryCardItem
                                        name={cat}
                                        image={STEEL_CATEGORY_IMAGES[cat] || "https://images.unsplash.com/photo-1618221639257-2ca67b34b62d?auto=format&fit=crop&q=80&w=800"}
                                        accentColor="#0EA5E9"
                                        onClick={() => navigate('/steel')}
                                    />
                                </Box>
                            ))}
                            <Box component={motion.div} variants={itemVariants}>
                                <ExploreMoreCard
                                    accentColor="#0EA5E9"
                                    onClick={() => navigate('/steel')}
                                    label="Explore Steel"
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ bgcolor: '#0F172A', color: 'white', py: 8, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h4" gutterBottom fontWeight="800">Ready to Transform Your Space?</Typography>
                        <Typography variant="h6" sx={{ mb: 4, fontWeight: 300, color: '#cbd5e1' }}>
                            Get in touch with us today for a free consultation and quote.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            sx={{
                                bgcolor: '#14B8A6',
                                fontSize: '1.2rem',
                                py: 1.5,
                                px: 6,
                                borderRadius: '12px',
                                '&:hover': { bgcolor: '#0EA5E9' }
                            }}
                        >
                            Get a Quote
                        </Button>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;



