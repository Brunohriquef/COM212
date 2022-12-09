const { sequelize } = require('../config/sql_connection')
const { Op } = require("sequelize");
const initModels = require("../models/init-models"); 
const { zonas } = initModels(sequelize)


exports.cadastrarZona = async (params) => {
	const { cep } = params
	try {
		const zona = await zonas.create({cep})
		return {count: 1, rows: {zona}}
	} catch (error) {
		throw error
	}
}

exports.consultarZona = async (params) => {
	const { id_zona, cep } = params

	try {
		
		const zona = await zonas.findAndCountAll({ 
			where: { [Op.or]: [ 
				{ id_zona: id_zona ?? 0 },
				{ cep: cep ?? ''}
			] } 
		})

		return zona

	} catch (error) {
		throw error
	}
}

exports.atualizarZona = async (params) => {
	const { id_zona } = params
	try {
		
		const zona = await zonas.update(
			{ ...params },
			{ where: { id_zona } }
		)

		return {count: zona[0], rows: {id_zona}} 

	} catch (error) {
		throw error
	}
}

exports.removerZona = async (params) => {
	const { id_zona } = params
	try {
		
		const zona = await zonas.destroy({ 
			where: { id_zona }
		})

		return {count: zona, rows: {id_zona}} 
		
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