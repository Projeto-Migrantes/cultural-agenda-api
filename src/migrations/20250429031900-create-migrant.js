import { DataTypes } from "sequelize";

export const up = async (queryInterface) => {
  await queryInterface.createTable("migrants", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  });
};

export const down = async (queryInterface) => {
  await queryInterface.dropTable("migrants");
};