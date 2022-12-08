const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico_reservas', {
    id_reserva: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_vaga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vagas',
        key: 'id_vaga'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id_usuario'
      }
    },
    duracao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    placa: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'historico_reservas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "historico_reservas_pkey",
        unique: true,
        fields: [
          { name: "id_reserva" },
        ]
      },
    ]
  });
};
