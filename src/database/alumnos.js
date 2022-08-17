const AlumnoModel = require('../models/AlumnoModel.js')

const getAllAlumnos = async (skip, limit) => {
	return AlumnoModel.find().skip(skip).limit(limit)
}

const getOneAlumno = async id => {
	return await AlumnoModel.findById(id)
}

const createNewAlumno = async newAlumno => {
	const alumno = new AlumnoModel(newAlumno)

	const created = await alumno.save()

	return created
}

const updateAlumno = async (id, newAlumno) => {
	return await AlumnoModel.updateOne(
		{ _id: id },
		{
			$set: newAlumno,
		}
	)
}

const deleteAlumno = async id => {
	return await AlumnoModel.deleteOne({ _id: id })
}

module.exports = {
	getAllAlumnos,
	getOneAlumno,
	createNewAlumno,
	updateAlumno,
	deleteAlumno,
}
