const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vagas', {
    id_vaga: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_zona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'zonas',
        key: 'id_zona'
      }
    },
    cep: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'vagas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "vagas_pkey",
        unique: true,
        fields: [
          { name: "id_vaga" },
        ]
      },
    ]
  });
};
