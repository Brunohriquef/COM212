const { sequelize } = require('../config/sql_connection')
const { Op } = require("sequelize");
const initModels = require("../models/init-models"); 
const { usuarios } = initModels(sequelize)


exports.cadastrarUsuario = async (params) => {
	const { nome, email, cpf, endereco, telefone, senha } = params
	try {
		const usuario = await usuarios.create({
			nome, email, cpf, endereco, telefone, senha
		})
		return {count: 1, rows: {usuario}}
	} catch (error) {
		throw error
	}
}

exports.consultarUsuario = async (params) => {
	const { id_usuario, nome, email, cpf } = params

	try {
		
		const usuario = await usuarios.findAndCountAll({ 
			where: { [Op.or]: [ 
				{ id_usuario: id_usuario ?? 0 },
				{ [Op.and]: [
					{ nome: {[Op.substring]: nome ?? ''} },
					{ email: {[Op.substring]: email ?? ''} },
					{ cpf: {[Op.substring]: cpf ?? ''}}
				]}
			] } 
		})

		return usuario

	} catch (error) {
		throw error
	}
}

exports.atualizarUsuario = async (params) => {
	const { id_usuario } = params
	try {
		
		const usuario = await usuarios.update(
			{ ...params },
			{ where: { id_usuario } }
		)

		return {count: usuario[0], rows: {id_usuario}} 

	} catch (error) {
		throw error
	}
}

exports.removerUsuario = async (params) => {
	const { id_usuario } = params
	try {
		
		const usuario = await usuarios.destroy({ 
			where: { id_usuario }
		})

		return {count: usuario, rows: {id_usuario}} 
		
	} catch (error) {
		throw error
	}
}


/**
 * Busca por todas as instancias da entidade Piloto-Corrida
 * @access ADMIN
 * @return Se encontrado, retorna as instancias. Caso contrario, retorna null.

exports.findTemporadaEquipe = async (params) => {
	const { temporada, equipe, attributes, where: filtroBase } = params;
	const { 
		construtores: Contructor, 
		temporada: Temporada, 
		temporadaconstrutores: TemporadaConstrutores } = models;
	
	let where = []
	where = where.concat(await ajustarFiltros(filtroBase, "temporadaconstrutores"))
	where = where.concat(await ajustarFiltros(temporada.where, "temporada"))
	where = where.concat(await ajustarFiltros(equipe.where, "contructor"))

	try {

		const data = await TemporadaConstrutores.findAndCountAll({
			attributes: attributes && attributes.length ? attributes : undefined,
			where,
			include: [
				{
					model: Contructor,
					as: 'contructor',
					attributes: equipe.attributes && equipe.attributes.length ? equipe.attributes : undefined
				},{
					model: Temporada,
					as: 'temporada',
					attributes: temporada.attributes && temporada.attributes.length ? temporada.attributes : undefined
				}
			]
		});
		return data;
		
	} catch (error) {
		console.log(error);
		throw error;
	}
};
*/