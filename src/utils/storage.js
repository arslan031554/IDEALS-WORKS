import { aluminiumData } from '../data/aluminiumData';
import { steelData } from '../data/steelData';

const STORAGE_KEYS = {
    ALUMINIUM_PRODUCTS: 'ideal_works_aluminium_products',
    STEEL_PRODUCTS: 'ideal_works_steel_products',
    ALUMINIUM_SOLUTIONS: 'ideal_works_aluminium_solutions',
    STEEL_SOLUTIONS: 'ideal_works_steel_solutions',
    ALUMINIUM_PROJECTS: 'ideal_works_aluminium_projects',
    STEEL_PROJECTS: 'ideal_works_steel_projects',
};

const initialSolutions = {
    aluminium: [
        { id: 's1', title: 'Window Installation', desc: 'Professional installation of all types of aluminium windows.' },
        { id: 's2', title: 'Door Customization', desc: 'Bespoke aluminium door designs tailored to your space.' }
    ],
    steel: [
        { id: 's3', title: 'Structural Engineering', desc: 'Expert steel structure design and implementation.' },
        { id: 's4', title: 'Gate Automation', desc: 'Modern robotic systems for secure gate entry.' }
    ]
};

export const STEEL_CATEGORIES = [
    "Gates",
    "Safety Grills",
    "Spiral Stairs",
    "Main Stairs",
    "Fiberglass Shades",
    "Tensile Fabric Shades",
    "Stainless Steel Railings"
];

export const ALUMINIUM_CATEGORIES = [
    "Aluminium Windows",
    "Double Glazed",
    "Single Glazed",
    "12mm Glass Work",
    "Shower Cabins",
    "Looking Glass",
    "Partitions"
];

export const ALUMINIUM_PROJECT_CATEGORIES = [
    "Residential Projects",
    "Commercial Buildings",
    "Industrial Units",
    "Custom Installations"
];

export const STEEL_PROJECT_CATEGORIES = [
    "Main Entry Gates",
    "Steel Structures",
    "Safety Installations",
    "Warehouse Projects"
];

export const initStorage = () => {
    if (!localStorage.getItem(STORAGE_KEYS.ALUMINIUM_PRODUCTS)) {
        localStorage.setItem(STORAGE_KEYS.ALUMINIUM_PRODUCTS, JSON.stringify(aluminiumData));
    } else {
        const currentData = JSON.parse(localStorage.getItem(STORAGE_KEYS.ALUMINIUM_PRODUCTS)) || [];
        const validData = currentData.filter(p => ALUMINIUM_CATEGORIES.includes(p.category));
        if (validData.length !== currentData.length) {
            localStorage.setItem(STORAGE_KEYS.ALUMINIUM_PRODUCTS, JSON.stringify(validData));
        }
    }
    if (!localStorage.getItem(STORAGE_KEYS.STEEL_PRODUCTS)) {
        localStorage.setItem(STORAGE_KEYS.STEEL_PRODUCTS, JSON.stringify(steelData));
    } else {
        const currentSteelData = JSON.parse(localStorage.getItem(STORAGE_KEYS.STEEL_PRODUCTS)) || [];
        const validSteelData = currentSteelData.filter(p => STEEL_CATEGORIES.includes(p.category));
        if (validSteelData.length !== currentSteelData.length) {
            const dataToSave = validSteelData.length > 0 ? validSteelData : steelData;
            localStorage.setItem(STORAGE_KEYS.STEEL_PRODUCTS, JSON.stringify(dataToSave));
        }
    }
    if (!localStorage.getItem(STORAGE_KEYS.ALUMINIUM_SOLUTIONS)) {
        localStorage.setItem(STORAGE_KEYS.ALUMINIUM_SOLUTIONS, JSON.stringify(initialSolutions.aluminium));
    }
    if (!localStorage.getItem(STORAGE_KEYS.STEEL_SOLUTIONS)) {
        localStorage.setItem(STORAGE_KEYS.STEEL_SOLUTIONS, JSON.stringify(initialSolutions.steel));
    }

    // Initialize Projects with default data
    if (!localStorage.getItem(STORAGE_KEYS.ALUMINIUM_PROJECTS)) {
        localStorage.setItem(STORAGE_KEYS.ALUMINIUM_PROJECTS, JSON.stringify([
            { id: 'p1', name: 'Elite Residential Windows', category: 'Residential Projects', desc: 'Premium installation for a 10-bedroom villa.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' }
        ]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.STEEL_PROJECTS)) {
        localStorage.setItem(STORAGE_KEYS.STEEL_PROJECTS, JSON.stringify([
            { id: 'p2', name: 'Industrial Warehouse Gate', category: 'Main Entry Gates', desc: 'Heavy duty automated gate for logistics hub.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800' }
        ]));
    }
    // Clean up old featured products key if it exists
    localStorage.removeItem('ideal_works_featured_products');
};

const getItems = (key) => {
    const rawData = JSON.parse(localStorage.getItem(key)) || [];
    if (key === STORAGE_KEYS.ALUMINIUM_PRODUCTS) {
        return rawData.filter(p => ALUMINIUM_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.STEEL_PRODUCTS) {
        return rawData.filter(p => STEEL_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.ALUMINIUM_PROJECTS) {
        return rawData.filter(p => ALUMINIUM_PROJECT_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.STEEL_PROJECTS) {
        return rawData.filter(p => STEEL_PROJECT_CATEGORIES.includes(p.category));
    }
    return rawData;
};

const setItems = (key, items) => {
    if (key === STORAGE_KEYS.ALUMINIUM_PRODUCTS) {
        items = items.filter(p => ALUMINIUM_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.STEEL_PRODUCTS) {
        items = items.filter(p => STEEL_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.ALUMINIUM_PROJECTS) {
        items = items.filter(p => ALUMINIUM_PROJECT_CATEGORIES.includes(p.category));
    }
    if (key === STORAGE_KEYS.STEEL_PROJECTS) {
        items = items.filter(p => STEEL_PROJECT_CATEGORIES.includes(p.category));
    }
    try {
        localStorage.setItem(key, JSON.stringify(items));
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
            alert('Storage limit exceeded! Please try using smaller images or deleting some items.');
            console.error('LocalStorage QuotaExceededError:', e);
        } else {
            console.error('Error saving to LocalStorage:', e);
        }
    }
};

export const storage = {
    getAluminiumProducts: () => getItems(STORAGE_KEYS.ALUMINIUM_PRODUCTS),
    saveAluminiumProducts: (items) => setItems(STORAGE_KEYS.ALUMINIUM_PRODUCTS, items),
    ALUMINIUM_CATEGORIES,

    getSteelProducts: () => getItems(STORAGE_KEYS.STEEL_PRODUCTS),
    saveSteelProducts: (items) => setItems(STORAGE_KEYS.STEEL_PRODUCTS, items),
    STEEL_CATEGORIES,

    getAluminiumSolutions: () => getItems(STORAGE_KEYS.ALUMINIUM_SOLUTIONS),
    saveAluminiumSolutions: (items) => setItems(STORAGE_KEYS.ALUMINIUM_SOLUTIONS, items),

    getSteelSolutions: () => getItems(STORAGE_KEYS.STEEL_SOLUTIONS),
    saveSteelSolutions: (items) => setItems(STORAGE_KEYS.STEEL_SOLUTIONS, items),

    getAluminiumProjects: () => getItems(STORAGE_KEYS.ALUMINIUM_PROJECTS),
    saveAluminiumProjects: (items) => setItems(STORAGE_KEYS.ALUMINIUM_PROJECTS, items),
    ALUMINIUM_PROJECT_CATEGORIES,

    getSteelProjects: () => getItems(STORAGE_KEYS.STEEL_PROJECTS),
    saveSteelProjects: (items) => setItems(STORAGE_KEYS.STEEL_PROJECTS, items),
    STEEL_PROJECT_CATEGORIES,
};
