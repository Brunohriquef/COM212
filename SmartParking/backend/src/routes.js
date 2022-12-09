
const express = require("express");
const routes = express.Router();
const UsuarioController = require("./controllers/UsuarioController");
const UsuarioValidation = require("./validations/UsuarioValidation");
const Usuario = {...UsuarioController, ...UsuarioValidation}
const ZonaController = require("./controllers/ZonaController");
const ZonaValidation = require("./validations/ZonaValidation");
const Zona = {...ZonaController, ...ZonaValidation}

routes.post("/usuario", Usuario.validarCadastro, Usuario.cadastrarUsuario);
routes.get("/usuario", Usuario.validarConsulta, Usuario.consultarUsuario);
routes.put("/usuario", Usuario.validarAtualizacao, Usuario.atualizarUsuario);
routes.delete("/usuario", Usuario.validarExclusao, Usuario.removerUsuario);

routes.post("/zona", Zona.validarCEP, Zona.cadastrarZona);
routes.get("/zona", Zona.validarCEP, Zona.consultarZona);
routes.put("/zona", Zona.validarAtualizacao, Zona.atualizarZona);
routes.delete("/zona", Zona.validarExclusao, Zona.removerZona);

module.exports = routes;
