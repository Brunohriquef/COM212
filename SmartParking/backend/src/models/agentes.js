const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agentes', {
    id_agente: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "agentes_cpf_key"
    },
    endereco: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'agentes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "agentes_cpf_key",
        unique: true,
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "agentes_pkey",
        unique: true,
        fields: [
          { name: "id_agente" },
        ]
      },
    ]
  });
};
