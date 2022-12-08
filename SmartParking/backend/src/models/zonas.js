const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zonas', {
    id_zona: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'zonas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "zonas_pkey",
        unique: true,
        fields: [
          { name: "id_zona" },
        ]
      },
    ]
  });
};
