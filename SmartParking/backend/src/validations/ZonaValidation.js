
const status = require("http-status");
const { validarCEP } = require("../utils/validarCEP")

exports.validarCEP = async (request, response, next) => {
    const { body } = request

    if (!body.cep || !validarCEP(body.cep))
        return response.status(status.BAD_REQUEST).send({ "erro": "CEP inválido!"});

    next();
};

exports.validarAtualizacao = async (request, response, next) => {
    const { body } = request

    if (!body.id_zona || !Number.isInteger(body.id_zona))
        return response.status(status.BAD_REQUEST).send({ "erro": "ID da zona inválido!"});

    if (!body.cep || !validarCEP(body.cep))
        return response.status(status.BAD_REQUEST).send({ "erro": "CEP inválido!"});

    next();
};

exports.validarExclusao = async (request, response, next) => {
    const { body } = request

    if (!body.id_zona || !Number.isInteger(body.id_zona))
        return response.status(status.BAD_REQUEST).send({ "erro": "ID da zona inválido!"});

    next();
};