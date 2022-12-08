const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alocacao_agentes', {
    id_agente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'agentes',
        key: 'id_agente'
      }
    },
    id_zona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'zonas',
        key: 'id_zona'
      }
    }
  }, {
    sequelize,
    tableName: 'alocacao_agentes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "alocacao_agentes_pkey",
        unique: true,
        fields: [
          { name: "id_agente" },
          { name: "id_zona" },
        ]
      },
    ]
  });
};
