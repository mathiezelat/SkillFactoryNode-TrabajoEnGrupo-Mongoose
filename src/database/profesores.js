const ProfesorModel = require('../models/ProfesorModel.js')

const getAllProfesores = async (skip, limit) => {
	return await ProfesorModel.find().skip(skip).limit(limit)
}

const getOneProfesor = async id => {
	return await ProfesorModel.findById(id)
}

const createNewProfesor = async newProfesor => {
	const profesor = new ProfesorModel(newProfesor)

	const created = await profesor.save()

	return created
}

const updateProfesor = async (id, newProfesor) => {
	return await ProfesorModel.updateOne(
		{ _id: id },
		{
			$set: newProfesor,
		}
	)
}

const deleteProfesor = async id => {
	return await ProfesorModel.deleteOne({ _id: id })
}

module.exports = {
	getAllProfesores,
	getOneProfesor,
	createNewProfesor,
	updateProfesor,
	deleteProfesor,
}
