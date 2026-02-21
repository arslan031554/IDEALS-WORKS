import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    LinearProgress,
    Button,
    TextField,
    InputAdornment,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Business,
    Visibility,
    Beenhere,
    Email,
    Engineering,
    Handyman,
    SupportAgent,
    DoubleArrow,
    Star,
    TaskAlt,
    ThumbUp
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AnimatedProgress = ({ label, value, color, icon: Icon }) => {
    return (
        <Box sx={{ mb: 4 }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1.5
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box sx={{
                        p: 1.2,
                        borderRadius: '12px',
                        bgcolor: 'rgba(20, 184, 166, 0.08)',
                        color: color,
                        display: 'flex',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
                    }}>
                        <Icon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography variant="body1" fontWeight="800" sx={{ color: '#0f172a', letterSpacing: -0.2 }}>
                        {label}
                    </Typography>
                </Box>
                <Typography variant="body1" fontWeight="900" sx={{ color: color, fontSize: '1.1rem' }}>
                    {value}%
                </Typography>
            </Box>
            <Box sx={{
                height: 12,
                bgcolor: '#f1f5f9',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
            }}>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${color} 0%, ${color}EE 100%)`,
                        borderRadius: '6px',
                        boxShadow: `0 4px 12px ${color}44`,
                        position: 'relative'
                    }}
                >
                    {/* Glossy overlay effect */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '40%',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)'
                    }} />
                </motion.div>
            </Box>
        </Box>
    );
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay }}
        style={{ height: '100%', width: '100%' }}
    >
        <Card
            component={motion.div}
            whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(20, 184, 166, 0.12)' }}
            sx={{
                p: { xs: 2, sm: 3, md: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '24px',
                border: '1px solid #f1f5f9',
                borderTop: '4px solid #14B8A6',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'white',
                '&:hover': {
                    '& .icon-box': {
                        transform: 'scale(1.1) rotate(5deg)',
                        bgcolor: '#14B8A6',
                        color: 'white'
                    }
                }
            }}
        >
            <Box
                className="icon-box"
                sx={{
                    mb: { xs: 1.5, md: 3 },
                    p: { xs: 1.5, md: 2.5 },
                    borderRadius: '20px',
                    bgcolor: 'rgba(20, 184, 166, 0.08)',
                    color: '#14B8A6',
                    transition: 'all 0.4s ease',
                    display: 'flex'
                }}
            >
                <Icon sx={{ fontSize: { xs: 28, md: 45 } }} />
            </Box>
            <Typography
                variant="h6"
                fontWeight="900"
                sx={{
                    mb: { xs: 1, md: 2 },
                    color: '#0f172a',
                    fontSize: { xs: '0.85rem', sm: '1.1rem', md: '1.5rem' },
                    lineHeight: 1.2
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    lineHeight: { xs: 1.4, md: 1.7 },
                    fontSize: { xs: '0.65rem', sm: '0.85rem', md: '1rem' },
                    opacity: 0.8
                }}
            >
                {description}
            </Typography>
        </Card>
    </motion.div>
);

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ overflow: 'hidden' }}>
            {/* 1. Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    height: { xs: '60vh', md: '70vh' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1920)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.65)',
                        zIndex: 1
                    }
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                fontSize: '1.2rem',
                                letterSpacing: 4,
                                color: '#C0C0C0',
                                fontWeight: '600',
                                mb: 2,
                                display: 'block'
                            }}
                        >
                            Professional Fabrication
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: '900',
                                fontSize: { xs: '3rem', md: '5rem' },
                                mb: 3,
                                textShadow: '2px 2px 10px rgba(0,0,0,0.3)'
                            }}
                        >
                            About <span style={{ color: '#14B8A6' }}>Us</span>
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                maxWidth: '800px',
                                mx: 'auto',
                                fontWeight: '400',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.6
                            }}
                        >
                            We provide high-quality aluminium and steel fabrication solutions with modern designs, strong materials, and professional workmanship.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* 2. Main About Section (Balanced Two-Column Layout) */}
            <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
                <Grid container>
                    {/* Main Content */}
                    <Grid item xs={12}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ height: '100%' }}
                        >
                            <Box sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <Box>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            bgcolor: '#14B8A6',
                                            color: 'white',
                                            display: 'inline-block',
                                            px: 1.5,
                                            py: 0.5,
                                            borderRadius: '4px',
                                            fontWeight: '700',
                                            mb: 2,
                                            textTransform: 'none'
                                        }}
                                    >
                                        About Us
                                    </Typography>

                                    <Typography
                                        variant="h2"
                                        fontWeight="900"
                                        sx={{
                                            mb: 3,
                                            lineHeight: 1.4,
                                            color: 'black',
                                            fontSize: { xs: '1.8rem', sm: '2.5rem' },
                                            '& span': {
                                                px: 1,
                                                py: 0.2,
                                                boxDecorationBreak: 'clone',
                                                WebkitBoxDecorationBreak: 'clone',
                                            }
                                        }}
                                    >
                                        <span>Get to Know More About Us and Why Choose Us</span>
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'white',
                                            bgcolor: '#14B8A6',
                                            p: 3,
                                            borderRadius: '4px',
                                            mb: 4,
                                            fontSize: { xs: '1rem', md: '1.05rem' },
                                            lineHeight: 1.8,
                                            textAlign: 'justify'
                                        }}
                                    >
                                        We are a trusted and reliable partner in the industry, fully committed to maintaining the highest standards of quality in every project we undertake. Our goal is to deliver products and services that not only meet but exceed customer expectations. We focus on modern and customized designs that match the unique style and functional needs of each client.

                                        Our advanced manufacturing process ensures precision, durability, and long-lasting performance. Along with this, our professional installation support guarantees that every product is fitted safely and correctly. This complete approach makes our aluminium, glass, and steel solutions dependable, efficient, and highly valued by our customers.

                                        Our experienced and skilled team takes the time to understand your architectural vision, technical requirements, and budget. Based on this understanding, we provide the most suitable and cost-effective solutions without compromising on quality. We believe in combining expertise, innovation, and attention to detail in every step of our work.
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight="700"
                                        color="black"
                                        sx={{
                                            fontStyle: 'italic',
                                            lineHeight: 1.6,
                                            borderLeft: '4px solid #14B8A6',
                                            pl: 2,
                                            mb: 4
                                        }}
                                    >
                                        We are committed to delivering high-quality, reliable, and professional services you can trust.
                                    </Typography>
                                </Box>

                                {/* Colorful Progress Lines refined */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, mt: 2 }}>
                                    <AnimatedProgress label="Professionalism" value={99} color="#14B8A6" icon={Star} />
                                    <AnimatedProgress label="Projects Completed" value={100} color="#0EA5E9" icon={TaskAlt} />
                                    <AnimatedProgress label="Customer Satisfaction" value={95} color="#ec4899" icon={ThumbUp} />
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* 3. Feature Cards (Mission/Vision/Goal) */}
            <Box sx={{ bgcolor: '#f8fafc', py: { xs: 6, md: 8 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        textAlign="center"
                        fontWeight="900"
                        sx={{ mb: 5, color: '#0f172a' }}
                    >
                        Our Professional <span style={{ color: '#14B8A6' }}>Approach</span>
                    </Typography>
                    <Box sx={{ overflowX: { xs: 'auto', md: 'visible' }, pb: 2 }}>
                        <Grid
                            container
                            spacing={{ xs: 2, md: 4 }}
                            sx={{
                                flexWrap: 'nowrap',
                                minWidth: { xs: '650px', sm: '800px', md: 'auto' }
                            }}
                        >
                            <Grid item xs={4}>
                                <FeatureCard
                                    icon={Business}
                                    title="Our Mission"
                                    description="Our mission is to provide strong, safe, and modern aluminium and steel products with high quality and customer satisfaction."
                                    delay={0.2}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FeatureCard
                                    icon={Visibility}
                                    title="Our Vision"
                                    description="Our vision is to become a trusted company known for reliable fabrication, modern designs, and professional service."
                                    delay={0.4}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FeatureCard
                                    icon={Beenhere}
                                    title="Our Goal"
                                    description="Our goal is to deliver durable and beautiful solutions using quality materials and skilled workmanship."
                                    delay={0.6}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* 4. Newsletter Section */}
            <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'white' }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box sx={{
                            p: { xs: 3, md: 6 },
                            borderRadius: 8,
                            bgcolor: '#0F172A',
                            color: 'white',
                            textAlign: 'center',
                            boxShadow: '0 30px 60px rgba(15, 23, 42, 0.3)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Decorative Background Icon */}
                            <Email sx={{
                                position: 'absolute',
                                fontSize: 300,
                                opacity: 0.05,
                                right: -50,
                                top: -50,
                                transform: 'rotate(-15deg)'
                            }} />

                            <Typography variant="h3" fontWeight="900" gutterBottom>
                                Stay Updated
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, fontWeight: '400' }}>
                                Subscribe to get updates about our latest aluminium and steel solutions.
                            </Typography>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                gap: 2,
                                maxWidth: '600px',
                                mx: 'auto'
                            }}>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your email address"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: 'white',
                                            borderRadius: 3,
                                            height: 60,
                                            fontSize: '1.1rem'
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#14B8A6',
                                        color: 'white',
                                        px: 6,
                                        height: 60,
                                        borderRadius: 3,
                                        fontSize: '1.1rem',
                                        fontWeight: '700',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#0EA5E9'
                                        }
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </Box >
    );
};

export default About;



