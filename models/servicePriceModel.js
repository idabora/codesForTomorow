const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Service = require('./serviceModel');

const ServicePrice = sequelize.define('ServicePrice', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    serviceId: { 
        type: DataTypes.UUID,
        references: { model: Service, key: 'id' }
    },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    type: { type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'), allowNull: false }
});

// ServicePrice.belongsTo(Service, { foreignKey: 'serviceId', as: 'service' });

module.exports = ServicePrice;
