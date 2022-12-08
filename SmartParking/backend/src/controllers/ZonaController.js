
const status = require("http-status");
const service = require('../services/ZonaService');

exports.cadastrarZona = async (request, response, next) => {
	try {
		const data = await service.cadastrarZona(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.atualizarZona = async (request, response, next) => {
	try {
		const data = await service.atualizarZona(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.consultarZona = async (request, response, next) => {
	try {
		const data = await service.consultarZona(request.query);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};

exports.removerZona = async (request, response, next) => {
	try {
		const data = await service.removerZona(request.body);
		return ( data && data.count > 0 && data.rows ? 
			response.status(status.OK).send(data.rows) : 
			response.status(status.NOT_FOUND).send());
	} catch (error) { 
		next(error);  
	}
};


