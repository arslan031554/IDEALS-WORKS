import React, { useState, useRef } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper, Alert, CircularProgress } from '@mui/material';
import { Phone, Email, LocationOn, WhatsApp, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const templateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(
            'service_2erhg4a',
            'template_9e9h5wa',
            templateParams,
            'tu31JIUrh53cpRlwm'
        )
            .then((result) => {
                console.log(result.text);
                setSubmitted(true);
                setLoading(false);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => setSubmitted(false), 5000);
            }, (error) => {
                console.log(error.text);
                setError(true);
                setLoading(false);
            });
    };

    return (
        <Box sx={{ pt: 16, pb: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom textAlign="center" sx={{ mb: 6 }}>
                    Contact Us
                </Typography>

                {/* Inquiry Type Selection - Side by Side */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)'
                        },
                        gap: 4,
                        mb: 8
                    }}
                >
                    {/* Aluminium Inquiry Box */}
                    <Box>
                        <Paper elevation={3} sx={{ p: 4, bgcolor: '#0F172A', color: 'white', borderRadius: 2, height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, display: 'flex', flexDirection: 'column' }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3} borderBottom="1px solid #14B8A6" pb={2}>
                                <Typography variant="h4" fontWeight="bold">Aluminium</Typography>
                                <Typography variant="caption" sx={{ bgcolor: '#14B8A6', px: 1, py: 0.5, borderRadius: 1, color: 'white' }}>INQUIRIES</Typography>
                            </Box>

                            <Box mb={4} flexGrow={1}>
                                <Typography variant="body1" sx={{ mb: 2, opacity: 0.8 }}>
                                    For windows, doors, partitions, and custom aluminium fabrication.
                                </Typography>
                            </Box>

                            <Box>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <Phone sx={{ mr: 2, color: '#14B8A6', fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="caption" color="gray">Direct Line</Typography>
                                        <Typography variant="h6">+92 307 4262167</Typography>
                                    </Box>
                                </Box>

                                <Box display="flex" alignItems="center" mb={4}>
                                    <Email sx={{ mr: 2, color: '#14B8A6', fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="caption" color="gray">Email Support</Typography>
                                        <Typography
                                            variant="h6"
                                            component="a"
                                            href="mailto:idealsworks33@gmail.com"
                                            sx={{ wordBreak: 'break-all', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#14B8A6' } }}
                                        >
                                            idealsworks33@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    startIcon={<WhatsApp />}
                                    href="https://wa.me/923074262167"
                                    target="_blank"
                                    sx={{
                                        bgcolor: '#14B8A6',
                                        color: 'white',
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        '&:hover': { bgcolor: '#0EA5E9' }
                                    }}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </Box>
                        </Paper>
                    </Box>

                    {/* Steel Inquiry Box */}
                    <Box>
                        <Paper elevation={3} sx={{ p: 4, bgcolor: '#F0F9FF', color: '#0F172A', borderRadius: 2, height: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-5px)' }, display: 'flex', flexDirection: 'column' }}>
                            <Box display="flex" alignItems="center" justifyContent="space-between" mb={3} borderBottom="1px solid #0EA5E9" pb={2}>
                                <Typography variant="h4" fontWeight="bold">Steel Works</Typography>
                                <Typography variant="caption" sx={{ bgcolor: '#0EA5E9', px: 1, py: 0.5, borderRadius: 1, color: 'white' }}>INQUIRIES</Typography>
                            </Box>

                            <Box mb={4} flexGrow={1}>
                                <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
                                    For gates, railings, heavy fabrication, and industrial steel structures.
                                </Typography>
                            </Box>

                            <Box>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <Phone sx={{ mr: 2, color: '#0EA5E9', fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Direct Line</Typography>
                                        <Typography variant="h6">+92 305 4688433</Typography>
                                        <Typography variant="h6">+92 302 4582473</Typography>
                                    </Box>
                                </Box>

                                <Box display="flex" alignItems="center" mb={4}>
                                    <Email sx={{ mr: 2, color: '#0EA5E9', fontSize: 28 }} />
                                    <Box>
                                        <Typography variant="caption" color="text.secondary">Email Support</Typography>
                                        <Typography
                                            variant="h6"
                                            component="a"
                                            href="mailto:idealsworks33@gmail.com"
                                            sx={{ wordBreak: 'break-all', color: 'inherit', textDecoration: 'none', '&:hover': { color: '#0EA5E9' } }}
                                        >
                                            idealsworks33@gmail.com
                                        </Typography>
                                    </Box>
                                </Box>

                                <Button
                                    variant="outlined"
                                    fullWidth
                                    size="large"
                                    startIcon={<WhatsApp />}
                                    href="https://wa.me/923054688433"
                                    target="_blank"
                                    sx={{
                                        borderColor: '#0EA5E9',
                                        color: '#0EA5E9',
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        borderWidth: 2,
                                        '&:hover': { borderWidth: 2, borderColor: '#14B8A6', bgcolor: 'rgba(30, 94, 255, 0.05)' }
                                    }}
                                >
                                    Chat on WhatsApp
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                </Box>

                {/* General Inquiry Form */}
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Send sx={{ color: '#14B8A6' }} /> General Message
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 4 }}>
                            Not sure who to contact? Fill out the form below and we'll route your inquiry to the right expert.
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        sm: 'repeat(3, 1fr)'
                                    },
                                    gap: 3,
                                    mb: 3
                                }}
                            >
                                <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 1' } }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Your Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 1' } }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 1' } }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Box sx={{ gridColumn: 'span 1', gridColumnEnd: { xs: 'span 1', sm: 'span 4' } }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                                <Box sx={{ gridColumn: 'span 1', gridColumnEnd: { xs: 'span 1', sm: 'span 4' } }}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Message"
                                        name="message"
                                        multiline
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                </Box>
                            </Box>
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={loading}
                                    endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send />}
                                    sx={{
                                        bgcolor: '#14B8A6',
                                        '&:hover': { bgcolor: '#0EA5E9' },
                                        py: 1.5,
                                        px: 4,
                                        minWidth: 200
                                    }}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Box>

                        </form>
                        {submitted && (
                            <Alert severity="success" sx={{ mt: 3 }}>
                                Thank you! Your message has been sent successfully.
                            </Alert>
                        )}
                        {error && (
                            <Alert severity="error" sx={{ mt: 3 }}>
                                Sorry, something went wrong. Please try again later or contact us directly.
                            </Alert>
                        )}
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;



