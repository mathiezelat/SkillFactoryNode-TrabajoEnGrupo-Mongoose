const alumnos = require('../database/alumnos.js')

const getAllAlumnos = (skip, limit) => {
	return alumnos.getAllAlumnos(skip, limit)
}

const getOneAlumno = id => {
	return alumnos.getOneAlumno(id)
}

const createNewAlumno = newAlumno => {
	return alumnos.createNewAlumno(newAlumno)
}

const updateAlumno = (id, newAlumno) => {
	return alumnos.updateAlumno(id, newAlumno)
}

const deleteAlumno = id => {
	return alumnos.deleteAlumno(id)
}

module.exports = {
	getAllAlumnos,
	getOneAlumno,
	createNewAlumno,
	updateAlumno,
	deleteAlumno,
}
