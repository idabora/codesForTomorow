const Category = require('../models/categoryModel');
const Service = require('../models/serviceModel'); // To check if category is empty

// Create a new category
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: 'Category name is required' });

        const existingCategory = await Category.findOne({ where: { name } });
        if (existingCategory) return res.status(400).json({ message: 'Category already exists' });

        const category = await Category.create({ name });
        res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Error creating category', error: error.message });
    }
};

// Get all categories
const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error: error.message });
    }
};

// Update a category
const updateCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { name } = req.body;

        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        category.name = name || category.name;
        await category.save();

        res.status(200).json({ message: 'Category updated successfully', category });
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error: error.message });
    }
};

// Delete a category (only if empty)
const deleteCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;

        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        // Check if category has any associated services
        const services = await Service.findOne({ where: { categoryId } });
        if (services) return res.status(400).json({ message: 'Cannot delete category with services' });

        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error: error.message });
    }
};

module.exports = { createCategory, getCategories, updateCategory, deleteCategory };
