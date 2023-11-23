// src/models/Product.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    // Defina os atributos do modelo Product
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    // Adicione mais atributos conforme necessário
  });

  return Product;
};
