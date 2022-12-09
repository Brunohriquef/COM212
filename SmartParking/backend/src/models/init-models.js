var DataTypes = require("sequelize").DataTypes;
var _agentes = require("./agentes");
var _alocacao_agentes = require("./alocacao_agentes");
var _historico_reservas = require("./historico_reservas");
var _pagamentos = require("./pagamentos");
var _usuarios = require("./usuarios");
var _vagas = require("./vagas");
var _zonas = require("./zonas");

function initModels(sequelize) {
  var agentes = _agentes(sequelize, DataTypes);
  var alocacao_agentes = _alocacao_agentes(sequelize, DataTypes);
  var historico_reservas = _historico_reservas(sequelize, DataTypes);
  var pagamentos = _pagamentos(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);
  var vagas = _vagas(sequelize, DataTypes);
  var zonas = _zonas(sequelize, DataTypes);

  agentes.belongsToMany(zonas, { as: 'id_zona_zonas', through: alocacao_agentes, foreignKey: "id_agente", otherKey: "id_zona" });
  zonas.belongsToMany(agentes, { as: 'id_agente_agentes', through: alocacao_agentes, foreignKey: "id_zona", otherKey: "id_agente" });
  alocacao_agentes.belongsTo(agentes, { as: "id_agente_agente", foreignKey: "id_agente"});
  agentes.hasMany(alocacao_agentes, { as: "alocacao_agentes", foreignKey: "id_agente"});
  historico_reservas.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(historico_reservas, { as: "historico_reservas", foreignKey: "id_usuario"});
  pagamentos.belongsTo(usuarios, { as: "id_usuario_usuario", foreignKey: "id_usuario"});
  usuarios.hasMany(pagamentos, { as: "pagamentos", foreignKey: "id_usuario"});
  historico_reservas.belongsTo(vagas, { as: "id_vaga_vaga", foreignKey: "id_vaga"});
  vagas.hasMany(historico_reservas, { as: "historico_reservas", foreignKey: "id_vaga"});
  alocacao_agentes.belongsTo(zonas, { as: "id_zona_zona", foreignKey: "id_zona"});
  zonas.hasMany(alocacao_agentes, { as: "alocacao_agentes", foreignKey: "id_zona"});
  vagas.belongsTo(zonas, { as: "id_zona_zona", foreignKey: "id_zona"});
  zonas.hasMany(vagas, { as: "vagas", foreignKey: "id_zona"});

  return {
    agentes,
    alocacao_agentes,
    historico_reservas,
    pagamentos,
    usuarios,
    vagas,
    zonas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
