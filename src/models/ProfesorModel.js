const mongoose = require('mongoose')
const profesorSchema = require('../schemas/profesorSchema.js')

const ProfesorModel = mongoose.model('Profesores', profesorSchema)

module.exports = ProfesorModel
