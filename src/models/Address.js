import sequelize from "../config/database.config.js";

import { DataTypes } from "sequelize";

const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "addresses",
    timestamps: true,
  },
);

Address.hasMany(Migrant, {
  foreignKey: "addresses_id",
  as: "address",
});
export default Address;
