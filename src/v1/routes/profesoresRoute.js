const express = require('express')
const profesoresController = require('../../controller/profesoresController.js')

const router = express.Router()

router
	.get('/', profesoresController.getAllProfesores)
	.get('/:id', profesoresController.getOneProfesor)
	.post('/', profesoresController.createNewProfesor)
	.put('/:id', profesoresController.updateProfesor)
	.delete('/:id', profesoresController.deleteProfesor)

module.exports = router
