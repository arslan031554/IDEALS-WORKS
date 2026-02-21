import React, { useState, useEffect } from 'react';
import {
    Box, Container, Typography, Tabs, Tab, Button, Grid, Card, CardMedia, CardContent,
    CardActions, Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem,
    IconButton, Paper, Divider, Alert, Snackbar, InputAdornment
} from '@mui/material';
import { Add, Edit, Delete, Save, Close, CloudUpload, Visibility, VisibilityOff, Logout } from '@mui/icons-material';
import { storage } from '../utils/storage';
import { motion, AnimatePresence } from 'framer-motion';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('admin_auth') === 'true');
    const [showPassword, setShowPassword] = useState(false);
    const [loginId, setLoginId] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState({
        aluminiumProducts: [],
        steelProducts: [],
        aluminiumProjects: [],
        steelProjects: []
    });
    const [openDialog, setOpenDialog] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        image: '',
        category: '',
        features: '', // Comma separated string for form (mapped to features array)
        title: '' // for solutions
    });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginId === 'hussain@gmail.com' && loginPassword === 'hussain@433') {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_auth', 'true');
            setLoginError('');
        } else {
            setLoginError('Invalid ID or Password. Access Denied.');
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        setData({
            aluminiumProducts: storage.getAluminiumProducts(),
            steelProducts: storage.getSteelProducts(),
            aluminiumProjects: storage.getAluminiumProjects(),
            steelProjects: storage.getSteelProjects()
        });
    };

    const handleTabChange = (event, newValue) => setActiveTab(newValue);

    const handleOpenDialog = (item = null) => {
        if (item) {
            setEditingItem(item);
            setFormData({
                ...item,
                features: item.features ? item.features.join(', ') : ''
            });
        } else {
            setEditingItem(null);
            setFormData({
                name: '',
                desc: '',
                image: '',
                category: '',
                features: '',
                title: ''
            });
        }
        setOpenDialog(true);
    };

    const handleSave = () => {
        // Tab mapping: 0=aluminiumProd, 1=steelProd, 2=aluminiumProj, 3=steelProj
        const typeMap = ['aluminiumProducts', 'steelProducts', 'aluminiumProjects', 'steelProjects'];
        const type = typeMap[activeTab];
        let updatedList = [...data[type]];

        if (editingItem) {
            const isAluminium = activeTab === 0 || activeTab === 2;
            const itemToSave = {
                ...formData,
                id: editingItem.id,
                description: formData.description || formData.desc || '',
                features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f !== '') : [],
                badgeColor: isAluminium ? '#f97316' : '#374151'
            };
            updatedList = updatedList.map(i => i.id === editingItem.id ? itemToSave : i);
        } else {
            const isAluminium = activeTab === 0 || activeTab === 2;
            const newItem = {
                ...formData,
                id: Date.now(),
                description: formData.description || formData.desc || '',
                features: formData.features ? formData.features.split(',').map(f => f.trim()).filter(f => f !== '') : [],
                badgeColor: isAluminium ? '#f97316' : '#374151'
            };
            updatedList.push(newItem);
        }

        if (type === 'aluminiumProducts') storage.saveAluminiumProducts(updatedList);
        if (type === 'steelProducts') storage.saveSteelProducts(updatedList);
        if (type === 'aluminiumProjects') storage.saveAluminiumProjects(updatedList);
        if (type === 'steelProjects') storage.saveSteelProjects(updatedList);

        loadData();
        setOpenDialog(false);
        setSnackbar({ open: true, message: 'Saved successfully!', severity: 'success' });
    };

    const handleDelete = (id) => {
        const typeMap = ['aluminiumProducts', 'steelProducts', 'aluminiumProjects', 'steelProjects'];
        const type = typeMap[activeTab];
        const updatedList = data[type].filter(item => item.id !== id);

        if (type === 'aluminiumProducts') storage.saveAluminiumProducts(updatedList);
        if (type === 'steelProducts') storage.saveSteelProducts(updatedList);
        if (type === 'aluminiumProjects') storage.saveAluminiumProjects(updatedList);
        if (type === 'steelProjects') storage.saveSteelProjects(updatedList);

        loadData();
        setSnackbar({ open: true, message: 'Deleted successfully!', severity: 'info' });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    const width = img.width;
                    const height = img.height;

                    if (width !== 600 || height !== 400) {
                        setSnackbar({
                            open: true,
                            message: 'Invalid image size. Please upload an image with exact dimensions of 600×400 pixels.',
                            severity: 'error'
                        });
                        e.target.value = ''; // Reset input
                        return;
                    }

                    setFormData({ ...formData, image: reader.result });
                    setSnackbar({ open: true, message: 'Image validated and uploaded!', severity: 'success' });
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const renderCard = (item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{
                height: 520,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }
            }}>
                <Box sx={{ overflow: 'hidden', height: 240, position: 'relative', bgcolor: '#f1f5f9' }}>
                    {item.image ? (
                        <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    ) : (
                        <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.disabled' }}>
                            No Image
                        </Box>
                    )}
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 0.5, lineHeight: 1.2, minHeight: '2.4em', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.name || item.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {item.desc || item.description}
                    </Typography>
                    {item.category && (
                        <Typography variant="caption" sx={{ display: 'block', mt: 1, color: '#14B8A6', fontWeight: 600 }}>
                            {item.category}
                        </Typography>
                    )}
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end', gap: 0.5, p: 1, borderTop: '1px solid #f1f5f9' }}>
                    <IconButton size="small" color="primary" onClick={() => handleOpenDialog(item)} sx={{ bgcolor: '#f1f5f9' }}><Edit fontSize="small" /></IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDelete(item.id)} sx={{ bgcolor: '#fef2f2' }}><Delete fontSize="small" /></IconButton>
                </CardActions>
            </Card>
        </Grid>
    );

    if (!isAuthenticated) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f1f5f9' }}>
                <Paper elevation={14} sx={{ p: 6, borderRadius: '24px', maxWidth: '400px', width: '90%', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                    <Typography variant="h4" fontWeight="900" color="#14B8A6" sx={{ mb: 1 }}>HONOR</Typography>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 4, letterSpacing: 2 }}>ADMIN ACCESS</Typography>

                    <form onSubmit={handleLogin}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                                label="Admin ID"
                                fullWidth
                                value={loginId}
                                onChange={(e) => setLoginId(e.target.value)}
                                autoFocus
                            />
                            <TextField
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {loginError && (
                                <Typography color="error" variant="caption" sx={{ mt: -1 }}>
                                    {loginError}
                                </Typography>
                            )}
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{ py: 1.5, borderRadius: '12px', fontWeight: 'bold' }}
                            >
                                Login to Dashboard
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        );
    }

    return (
        <Box sx={{ pt: 12, pb: 8, bgcolor: '#f8fafc', minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                        <Typography variant="h3" fontWeight="900" color="#14B8A6">HONOR DASHBOARD</Typography>
                        <Typography variant="subtitle2" color="text.secondary">Welcome back, Hussain</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<Logout />}
                            onClick={() => { sessionStorage.removeItem('admin_auth'); setIsAuthenticated(false); }}
                            sx={{ borderRadius: '25px', px: 3, fontWeight: 'bold' }}
                        >
                            Logout
                        </Button>
                        <Button variant="contained" startIcon={<Add />} onClick={() => handleOpenDialog()} sx={{ borderRadius: '25px', px: 4, py: 1.5 }}>
                            Add New Item
                        </Button>
                    </Box>
                </Box>

                <Alert severity="info" sx={{ mb: 4, borderRadius: '8px' }}>
                    Welcome Honor. You can manage Aluminium and Steel products and solutions here. All changes are saved instantly to local browsers.
                </Alert>

                <Paper elevation={0} sx={{ borderRadius: '16px', border: '1px solid #e2e8f0', p: 1, mb: 4 }}>
                    <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
                        <Tab label="Aluminium Products" />
                        <Tab label="Steel Products" />
                        <Tab label="Aluminium Projects" />
                        <Tab label="Steel Projects" />
                    </Tabs>
                </Paper>

                <Grid container spacing={3}>
                    {activeTab === 0 && data.aluminiumProducts.map(renderCard)}
                    {activeTab === 1 && data.steelProducts.map(renderCard)}
                    {activeTab === 2 && data.aluminiumProjects.map(renderCard)}
                    {activeTab === 3 && data.steelProjects.map(renderCard)}
                </Grid>

                {/* Edit/Add Dialog */}
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
                    <DialogTitle>{editingItem ? 'Edit Item' : 'Add New Item'}</DialogTitle>
                    <DialogContent sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField label="Name" fullWidth value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        <TextField label="Description" fullWidth multiline rows={3} value={formData.desc || formData.description} onChange={(e) => setFormData({ ...formData, desc: e.target.value, description: e.target.value })} />

                        <Box>
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                type="file"
                                onChange={handleImageUpload}
                            />
                            <label htmlFor="raised-button-file">
                                <Button variant="outlined" component="span" fullWidth startIcon={<CloudUpload />} sx={{ py: 1.5 }}>
                                    {formData.image ? 'Change Picture' : 'Upload Picture'}
                                </Button>
                            </label>
                            {formData.image && (
                                <Typography variant="caption" sx={{ mt: 1, display: 'block', textAlign: 'center', color: 'success.main' }}>
                                    Image selected successfully!
                                </Typography>
                            )}
                        </Box>

                        <TextField
                            label="Key Specifications (Comma separated)"
                            fullWidth
                            placeholder="e.g. Noise insulation, Waterproof, Smooth operation"
                            value={formData.features}
                            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        />

                        <TextField label="Category" fullWidth select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                            {activeTab === 0 && storage.ALUMINIUM_CATEGORIES.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                            {activeTab === 1 && storage.STEEL_CATEGORIES.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                            {activeTab === 2 && storage.ALUMINIUM_PROJECT_CATEGORIES.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                            {activeTab === 3 && storage.STEEL_PROJECT_CATEGORIES.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                        </TextField>
                    </DialogContent>
                    <DialogActions sx={{ p: 3 }}>
                        <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                        <Button variant="contained" onClick={handleSave} startIcon={<Save />}>Save Changes</Button>
                    </DialogActions>
                </Dialog>

                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert severity={snackbar.severity} sx={{ width: '100%' }}>{snackbar.message}</Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};

export default Admin;



