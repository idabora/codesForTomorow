const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./categoryModel');

const Service = sequelize.define('Service', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.ENUM('Normal', 'VIP'), allowNull: false },
    categoryId: { 
        type: DataTypes.UUID,
        references: { model: Category, key: 'id' }
    }
});
// Service.hasMany(require('./servicePriceModel'),{foreignkey:'serviceId',as:'priceOptions'});
module.exports = Service;
