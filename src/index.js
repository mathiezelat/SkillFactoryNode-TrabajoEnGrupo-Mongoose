const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()

const alumnosRoute = require('./v1/routes/alumnosRoute.js')
const profesoresRoute = require('./v1/routes/profesoresRoute.js')

const url = process.env.URL_MONGO

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('✅ Conectado a MongoDB'))
	.catch(err => console.log(err))

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static('public'))

app.use('/api/v1/alumnos', alumnosRoute)
app.use('/api/v1/profesores', profesoresRoute)

app.listen(3000, () => {
	console.log('🚀 Servidor escuchando en el puerto 3000')
})
