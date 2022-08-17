const mongoose = require('mongoose')
const alumnoSchema = require('../schemas/alumnoSchema.js')

const AlumnoModel = mongoose.model('Alumnos', alumnoSchema)

module.exports = AlumnoModel
