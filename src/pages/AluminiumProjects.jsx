import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Divider, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { storage } from '../utils/storage';
import { motion, AnimatePresence } from 'framer-motion';
import { Collections, ViewStream, Apartment } from '@mui/icons-material';

const AluminiumProjects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setProjects(storage.getAluminiumProjects());
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const renderProjectSection = (sectionTitle, sectionProjects, icon) => {
        if (sectionProjects.length === 0) return null;

        return (
            <Box sx={{ mb: { xs: 8, md: 10 } }} key={sectionTitle}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 4,
                        borderLeft: '6px solid #14B8A6',
                        pl: 2.5
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'rgba(20, 184, 166, 0.1)',
                            color: '#14B8A6',
                            p: 1.2,
                            borderRadius: '10px'
                        }}>
                            {icon}
                        </Box>
                        <Box>
                            <Typography variant="h4" fontWeight="900" sx={{ color: '#0f172a', letterSpacing: '-0.02em', fontSize: { xs: '1.5rem', md: '2.1rem' } }}>
                                {sectionTitle}
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <Grid container spacing={3.5}>
                        {sectionProjects.map((project) => (
                            <Grid item key={`${sectionTitle}-${project.id}`} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                                <motion.div variants={itemVariants} style={{ display: 'flex', width: '100%', flex: 1 }}>
                                    <ProductCard product={project} />
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>
        );
    };

    return (
        <Box sx={{ bgcolor: '#ffffff', minHeight: '100vh' }}>
            <Box
                sx={{
                    pt: { xs: 15, md: 22 },
                    pb: { xs: 8, md: 12 },
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'white',
                    clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)'
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    opacity: 0.05,
                    backgroundImage: 'radial-gradient(#14B8A6 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{ display: 'inline-flex', px: 2, py: 0.8, bgcolor: 'rgba(20, 184, 166, 0.1)', color: '#14B8A6', borderRadius: '100px', mb: 3, border: '1px solid rgba(20, 184, 166, 0.2)' }}>
                                <Typography variant="caption" fontWeight="900" sx={{ letterSpacing: 2, textTransform: 'uppercase' }}>
                                    Portfolio
                                </Typography>
                            </Box>
                            <Typography variant="h1" fontWeight="900" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '4.2rem' }, lineHeight: 1.1 }}>
                                Aluminium <span style={{ color: '#14B8A6' }}>Milestones</span>
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
                                A showcase of our finest aluminium installations, from luxury residences to large-scale commercial infrastructures.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Box sx={{
                bgcolor: '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
                position: 'sticky',
                top: 80,
                zIndex: 10,
                backdropFilter: 'blur(10px)',
                background: 'rgba(248, 250, 252, 0.8)'
            }}>
                <Container maxWidth="lg">
                    <Box sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        py: 2.5,
                        gap: 1.5,
                        '&::-webkit-scrollbar': { display: 'none' },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        justifyContent: { xs: 'flex-start', md: 'center' }
                    }}>
                        {['All', ...storage.ALUMINIUM_PROJECT_CATEGORIES].map((cat) => (
                            <Button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                sx={{
                                    px: 3.5,
                                    py: 1,
                                    whiteSpace: 'nowrap',
                                    borderRadius: '100px',
                                    fontSize: '0.85rem',
                                    fontWeight: '800',
                                    textTransform: 'none',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    bgcolor: selectedCategory === cat ? '#14B8A6' : 'transparent',
                                    color: selectedCategory === cat ? 'white' : '#64748B',
                                    border: '1px solid',
                                    borderColor: selectedCategory === cat ? '#14B8A6' : '#e2e8f0',
                                    boxShadow: selectedCategory === cat ? '0 8px 15px rgba(20, 184, 166, 0.2)' : 'none',
                                    '&:hover': {
                                        bgcolor: selectedCategory === cat ? '#0D9488' : '#f1f5f9',
                                        borderColor: '#14B8A6',
                                        color: selectedCategory === cat ? 'white' : '#14B8A6'
                                    }
                                }}
                            >
                                {cat}
                            </Button>
                        ))}
                    </Box>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ pt: 8, pb: 15 }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                    >
                        {selectedCategory === 'All' ? (
                            <>
                                {renderProjectSection("Featured Portfolio", projects, <Collections />)}
                                <Divider sx={{ my: 10, borderStyle: 'dashed', opacity: 0.5 }} />
                                {storage.ALUMINIUM_PROJECT_CATEGORIES.map(category => (
                                    renderProjectSection(
                                        category,
                                        projects.filter(p => p.category === category),
                                        <Apartment />
                                    )
                                ))}
                            </>
                        ) : (
                            renderProjectSection(
                                selectedCategory,
                                projects.filter(p => p.category === selectedCategory),
                                <ViewStream />
                            )
                        )}
                    </motion.div>
                </AnimatePresence>

                {projects.length === 0 && (
                    <Box sx={{ textAlign: 'center', py: 15, bgcolor: '#f8fafc', borderRadius: 8, border: '2px dashed #e2e8f0' }}>
                        <Collections sx={{ fontSize: 60, color: '#94a3b8', mb: 2 }} />
                        <Typography variant="h5" fontWeight="700" color="#475569">
                            Portfolio is currently being updated.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Great things take time. Check back soon.
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default AluminiumProjects;



