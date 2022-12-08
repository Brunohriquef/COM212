
const status = require("http-status");
const service = require('../services/UsuarioService');

exports.cadastrarUsuario = async (request, response, next) => {
	try {
		const data = await service.cadastrarUsuario(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.atualizarUsuario = async (request, response, next) => {
	try {
		const data = await service.atualizarUsuario(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.consultarUsuario = async (request, response, next) => {
	try {
		const data = await service.consultarUsuario(request.query);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.removerUsuario = async (request, response, next) => {
	try {
		const data = await service.removerUsuario(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};


