
const status = require("http-status");
const { validarEmail } = require("../utils/validarEmail")
const { validarCPF } = require("../utils/validarCPF")

exports.validarCadastro = async (request, response, next) => {
    const { body } = request

    if (!body.nome || typeof body.nome !== 'string' || body.nome === '' || body.nome.length > 100)
        return response.status(status.BAD_REQUEST).send({ "erro": "Nome do usuário inválido!"});

    if (!body.email || typeof body.email !== 'string' || !validarEmail(body.email) || body.email.length > 100)
        return response.status(status.BAD_REQUEST).send({ "erro": "E-mail do usuário inválido!"});

    if (!body.cpf || typeof body.cpf !== 'string' || !validarCPF(body.cpf))
        return response.status(status.BAD_REQUEST).send({ "erro": "CPF do usuário inválido!"});

    if (!body.telefone || typeof body.telefone !== 'string' || body.telefone === '' || !body.telefone.length > 13)
        return response.status(status.BAD_REQUEST).send({ "erro": "Telefone do usuário inválido!"});

    if (!body.senha || typeof body.senha !== 'string' || body.senha === '')
        return response.status(status.BAD_REQUEST).send({ "erro": "Senha do usuário inválida!"});

    next();
};

exports.validarConsulta = async (request, response, next) => {
    const { query } = request

    if(!query.nome && !query.email && !query.cpf && !query.id_usuario)
        return response.status(status.BAD_REQUEST).send({ "erro": "Nenhum parâmetro de consulta foi fornecido!"});

    if (query.nome && (typeof query.nome !== 'string' || query.nome === '' || query.nome.length > 100))
        return response.status(status.BAD_REQUEST).send({ "erro": "Nome do usuário inválido!"});

    if (query.email && (typeof query.email !== 'string' || query.email.length > 100))
        return response.status(status.BAD_REQUEST).send({ "erro": "E-mail do usuário inválido!"});

    if (query.cpf && typeof query.cpf !== 'string')
        return response.status(status.BAD_REQUEST).send({ "erro": "CPF do usuário inválido!"});

    next();
};

exports.validarAtualizacao = async (request, response, next) => {
    const { body } = request

    if (!body.id_usuario || !Number.isInteger(body.id_usuario))
        return response.status(status.BAD_REQUEST).send({ "erro": "ID do usuário inválido!"});

    if (body.nome && (typeof body.nome !== 'string' || body.nome === '' || body.nome.length > 100))
        return response.status(status.BAD_REQUEST).send({ "erro": "Nome do usuário inválido!"});

    if (body.email && (typeof body.email !== 'string' || !validarEmail(body.email) || body.email.length > 100))
        return response.status(status.BAD_REQUEST).send({ "erro": "E-mail do usuário inválido!"});

    if (body.cpf && (typeof body.cpf !== 'string' || !validarCPF(body.cpf)))
        return response.status(status.BAD_REQUEST).send({ "erro": "CPF do usuário inválido!"});

    if (body.telefone && (typeof body.telefone !== 'string' || body.telefone === '' || !body.telefone.length > 13))
        return response.status(status.BAD_REQUEST).send({ "erro": "Telefone do usuário inválido!"});

    if (body.senha && (typeof body.senha !== 'string' || body.senha === ''))
        return response.status(status.BAD_REQUEST).send({ "erro": "Senha do usuário inválida!"});

    next();
};

exports.validarExclusao = async (request, response, next) => {
    const { body } = request

    if (!body.id_usuario || !Number.isInteger(body.id_usuario))
        return response.status(status.BAD_REQUEST).send({ "erro": "ID do usuário inválido!"});

    next();
};
