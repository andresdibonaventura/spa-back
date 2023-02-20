const { DataTypes } = require("sequelize");

const { db } = require("../../src/utils/database");

const Products = db.define("products", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },

  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "updated_at",
  },
});

module.exports = Products;
