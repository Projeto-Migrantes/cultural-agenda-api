export const up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('migrants', {
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
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING(15),
      unique: true,
    },
    crnm: {
      type: DataTypes.STRING(9),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    registration_data: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
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
        references: {
          model: Address,
          key: 'id',
      },
    },
    address_complement: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    social_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    language_preference: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    entry_into_brazil: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    migration_reason: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    country_of_origin: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    marital_status: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    literacy_level: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });
}

export const down = async (queryInterface, Sequelize) =>{
  await queryInterface.dropTable('migrants');
}