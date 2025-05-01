import { DataTypes } from "sequelize";
import connection from "../config/database.js";

const Migrant = connection.define(
  "Migrant",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    phone_number: {
      type: DataTypes.STRING(15),
    },
    crnm: {
      type: DataTypes.STRING(9),
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    registration_data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    consent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.TEXT,
    },
    addresses_id: {
      type: DataTypes.INTEGER,
    },
    address_complement: {
      type: DataTypes.STRING(50),
    },
    address_number: {
      type: DataTypes.STRING(10),
    },
    social_name: {
      type: DataTypes.STRING(255),
    },
    language_preference: {
      type: DataTypes.STRING(50),
    },
    entry_into_brazil: {
      type: DataTypes.DATE,
    },
    migration_reason: {
      type: DataTypes.STRING(100),
    },
    country_of_origin: {
      type: DataTypes.STRING(50),
    },
    gender: {
      type: DataTypes.STRING(50),
    },
    marital_status: {
      type: DataTypes.STRING(50),
    },
    literacy_level: {
      type: DataTypes.STRING(50),
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "migrants",
    defaultScope: {
      attributes: { exclude: ["password"] },
    },
    scopes: {
      withPassword: { attributes: {} },
    },
    timestamps: true,
  }
);

export default Migrant;