# Honor Admin Dashboard Guide

This guide explains how to use the hidden administration panel to manage the content of your website.

## 1. Accessing the Dashboard
To access the admin panel, navigate to the following secret URL in your browser:
**`[your-website-url]/honor-admin`**

### Credentials for Hussain
- **ID**: `hussain@gmail.com`
- **Password**: `hussain@433`

## 2. Navigation
The dashboard is divided into five main tabs:
- **Featured (Home)**: Manage the product cards that appear in the "Aluminium Solutions" and "Steel Solutions" rows on the Home page.
- **Aluminium Products**: Manage the full catalogue of aluminium products.
- **Steel Products**: Manage the full catalogue of steel products.
- **Aluminium Solutions**: Manage the "Specialized Aluminium Solutions" list at the bottom of the Aluminium page.
- **Steel Solutions**: Manage the "Industrial Steel Solutions" list at the bottom of the Steel page.

## 3. Managing Content

### Adding a New Item
1. Click the **"Add New Item"** button at the top right.
2. Fill in the name/title, description, and image URL (for products).
3. Select the appropriate category (e.g., Windows, Doors).
4. Click **"Save Changes"**.

### Editing an Item
1. Locate the item card in the grid.
2. Click the **Blue Edit Icon** (pencil).
3. Update the fields in the popup window.
4. Click **"Save Changes"**.

### Deleting an Item
1. Click the **Red Delete Icon** (trash can) on the item card.
2. The item will be removed immediately.

## 4. How Persistence Works
- **Frontend-Only**: All data is stored in your browser's `localStorage`.
- **Immediate Sync**: Any changes you make in the admin panel will instantly update the Home, Aluminium, and Steel pages.
- **Browser Specific**: Changes made in one browser (e.g., Chrome) will not automatically appear in another (e.g., Safari) unless you export/import the data (which can be added if needed).

> [!IMPORTANT]
> Since this is a frontend-only application, if you clear your browser's "Site Data" or "Cache", the changes might be reset to the original default values.
