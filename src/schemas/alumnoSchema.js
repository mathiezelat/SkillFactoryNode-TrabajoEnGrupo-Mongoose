const mongoose = require('mongoose')

const alumnoSchema = mongoose.Schema(
	{
		name: String,
		age: Number,
		country: String,
	},
	{ versionKey: false, timestamps: true }
)

module.exports = alumnoSchema
