const profesores = require('../database/profesores.js')

const getAllProfesores = (skip, limit) => {
	return profesores.getAllProfesores(skip, limit)
}

const getOneProfesor = id => {
	return profesores.getOneProfesor(id)
}

const createNewProfesor = newProfesor => {
	return profesores.createNewProfesor(newProfesor)
}

const updateProfesor = (id, newProfesor) => {
	return profesores.updateProfesor(id, newProfesor)
}

const deleteProfesor = id => {
	return profesores.deleteProfesor(id)
}

module.exports = {
	getAllProfesores,
	getOneProfesor,
	createNewProfesor,
	updateProfesor,
	deleteProfesor,
}
