const alumnoService = require('../services/alumnoServices.js')

const { characterValidation } = require('../regex/regex.js')

const getAllAlumnos = async (req = request, res = response) => {
	const { skip = 0, limit = 0 } = req.query

	if (characterValidation.test(skip) || characterValidation.test(limit)) {
		return res.status(400).send('Número de skip o limit inválido')
	}

	const allAlumnos = await alumnoService.getAllAlumnos(
		Number(skip),
		Number(limit)
	)

	res.status(200).json({ data: allAlumnos })
}

const getOneAlumno = async (req, res) => {
	const { id } = req.params

	const alumno = await alumnoService.getOneAlumno(id)

	res.status(200).json({ data: alumno })
}

const createNewAlumno = async (req, res) => {
	const { name, age, country } = req.body

	if (!name || !age || !country) {
		return res
			.status(400)
			.send('Los campos name, age y country son obligatorios')
	}

	const newAlumno = {
		name,
		age,
		country,
	}

	const createdAlumno = await alumnoService.createNewAlumno(newAlumno)

	res.status(201).json({
		message: 'Alumno creado correctamente',
		data: createdAlumno,
	})
}

const updateAlumno = async (req, res) => {
	const { id } = req.params
	const { name, age, country } = req.body

	const newAlumno = {
		name,
		age,
		country,
	}

	const updatedAlumno = await alumnoService.updateAlumno(id, newAlumno)

	res.status(202).json({
		message: 'Alumno actualizado correctamente',
		data: updatedAlumno,
	})
}

const deleteAlumno = async (req, res) => {
	const { id } = req.params

	const deletedAlumno = await alumnoService.deleteAlumno(id)

	res.status(202).json({
		message: 'Alumno borrado correctamente',
		data: deletedAlumno,
	})
}

module.exports = {
	getAllAlumnos,
	getOneAlumno,
	createNewAlumno,
	updateAlumno,
	deleteAlumno,
}
