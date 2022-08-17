const profesorService = require('../services/profesorService.js')

const { characterValidation, numberValidation } = require('../regex/regex.js')

const getAllProfesores = async (req, res) => {
	const { skip = 0, limit = 0 } = req.query

	if (characterValidation.test(skip) || characterValidation.test(limit)) {
		return res.status(400).send('Número de skip o limit inválido')
	}

	const allProfesores = await profesorService.getAllProfesores(
		Number(skip),
		Number(limit)
	)

	res.status(200).json({ data: allProfesores })
}

const getOneProfesor = async (req, res) => {
	const { id } = req.params

	const profesor = await profesorService.getOneProfesor(id)

	res.status(200).json({ data: profesor })
}

const createNewProfesor = async (req, res) => {
	const { name, course, grade } = req.body

	if (!name || !course || !numberValidation.test(String(grade))) {
		return res
			.status(400)
			.send('Los campos name, course y grade son obligatorios')
	}

	const newProfesor = {
		name,
		course,
		grade,
	}

	const createdProfesor = await profesorService.createNewProfesor(newProfesor)

	res.status(201).json({
		message: 'Profesor creado correctamente',
		data: createdProfesor,
	})
}

const updateProfesor = async (req, res) => {
	const { id } = req.params
	const { name, course, grade } = req.body

	const newProfesor = {
		name,
		course,
		grade,
	}

	const updatedProfesor = await profesorService.updateProfesor(
		id,
		newProfesor
	)

	res.status(202).json({
		message: 'Profesor actualizado correctamente',
		data: updatedProfesor,
	})
}

const deleteProfesor = async (req, res) => {
	const { id } = req.params

	const deletedProfesor = await profesorService.deleteProfesor(id)

	res.status(202).json({
		message: 'Profesor borrado correctamente',
		data: deletedProfesor,
	})
}

module.exports = {
	getAllProfesores,
	getOneProfesor,
	createNewProfesor,
	updateProfesor,
	deleteProfesor,
}
