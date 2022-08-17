const express = require('express')
const alumnosController = require('../../controller/alumnosController.js')

const router = express.Router()

router
	.get('/', alumnosController.getAllAlumnos)
	.get('/:id', alumnosController.getOneAlumno)
	.post('/', alumnosController.createNewAlumno)
	.put('/:id', alumnosController.updateAlumno)
	.delete('/:id', alumnosController.deleteAlumno)

module.exports = router
