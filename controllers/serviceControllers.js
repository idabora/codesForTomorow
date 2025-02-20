const Service = require('../models/serviceModel');
const Category = require('../models/categoryModel');
const ServicePrice = require('../models/servicePriceModel');

// Create a new service under a category
const addService = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const { name, type, priceOptions } = req.body;

        // Validate request
        if (!name || !type) return res.status(400).json({ message: 'Service name and type are required' });

        if (!['Normal', 'VIP'].includes(type)) {
            return res.status(400).json({ message: 'Invalid service type' });
        }

        // Check if category exists
        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        // Create service
        const service = await Service.create({ name, type, categoryId });

        // Add price options if provided
        if (Array.isArray(priceOptions) && priceOptions.length > 0) {
            const priceData = priceOptions.map(option => ({
                serviceId: service.id,
                duration: option.duration,
                price: option.price,
                type: option.type
            }));

            await ServicePrice.bulkCreate(priceData);
        }

        res.status(201).json({ message: 'Service added successfully', service });
    } catch (error) {
        res.status(500).json({ message: 'Error adding service', error: error.message });
    }
};

// Get all services under a category
const getServices = async (req, res) => {
    try {
        const { categoryId } = req.params;

        // Check if category exists
        const category = await Category.findByPk(categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });

        // Fetch services with price options
        const services = await Service.findAll({
            where: { categoryId },
            // include: [{ model: ServicePrice, as: 'priceOptions' }]
        });

        res.status(200).json({ services });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services', error: error.message });
    }
};

// Update a service (including price options)
const updateService = async (req, res) => {
    try {
        const { categoryId, serviceId } = req.params;
        const { name, type, priceOptions } = req.body;

        // Check if service exists
        const service = await Service.findOne({ where: { id: serviceId, categoryId } });
        if (!service) return res.status(404).json({ message: 'Service not found in this category' });

        // Update service details
        service.name = name || service.name;
        service.type = type || service.type;
        await service.save();

        // Update price options if provided
        if (Array.isArray(priceOptions)) {
            await ServicePrice.destroy({ where: { serviceId } }); // Remove existing prices

            const priceData = priceOptions.map(option => ({
                serviceId: service.id,
                duration: option.duration,
                price: option.price,
                type: option.type
            }));

            await ServicePrice.bulkCreate(priceData); // Add new price options
        }

        res.status(200).json({ message: 'Service updated successfully', service });
    } catch (error) {
        res.status(500).json({ message: 'Error updating service', error: error.message });
    }
};

// Delete a service from a category
const deleteService = async (req, res) => {
    try {
        const { categoryId, serviceId } = req.params;

        // Check if service exists
        const service = await Service.findOne({ where: { id: serviceId, categoryId } });
        if (!service) return res.status(404).json({ message: 'Service not found in this category' });

        await ServicePrice.destroy({ where: { serviceId } }); // Remove related price options
        await service.destroy(); // Delete service

        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting service', error: error.message });
    }
};

module.exports = { addService, getServices, updateService, deleteService };
