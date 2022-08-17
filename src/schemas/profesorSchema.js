const mongoose = require('mongoose')

const profesorSchema = mongoose.Schema(
	{
		name: String,
		course: String,
		grade: Number,
	},
	{ versionKey: false, timestamps: true }
)

module.exports = profesorSchema
