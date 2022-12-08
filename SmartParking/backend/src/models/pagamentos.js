const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamentos', {
    id_pagamento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    tipo_pagamento: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nro_cartao: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    cvv: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    chave_pix: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    boleto: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamentos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pagamentos_pkey",
        unique: true,
        fields: [
          { name: "id_pagamento" },
        ]
      },
    ]
  });
};
