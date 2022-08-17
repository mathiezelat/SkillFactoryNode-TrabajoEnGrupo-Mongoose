const alumnosUrl = '/api/v1/alumnos'

const profesoresUrl = '/api/v1/profesores'

fetch(alumnosUrl)
	.then(response => response.json())
	.then(({ data }) => {
		renderAlumnos(data)
	})
	.catch(err => {
		console.log(err)
	})

fetch(profesoresUrl)
	.then(response => response.json())
	.then(({ data }) => {
		renderProfesores(data)
	})
	.catch(err => {
		console.log(err)
	})

function renderAlumnos(data) {
	const alumnos = document.getElementById('renderAlumnos')

	let body = '<ol>'

	data.forEach(alumno => {
		body += `<li>Nombre: ${alumno.name}, Edad: ${alumno.age}, País: ${alumno.country}</li>`
	})

	body += '</ol>'

	alumnos.innerHTML = body
}

function renderProfesores(data) {
	const profesores = document.getElementById('renderProfesores')

	let body = '<ol>'

	data.forEach(profesor => {
		body += `<li>Nombre: ${profesor.name}, Materia: ${profesor.course}, Grado: ${profesor.grade}</li>`
	})

	body += '</ol>'

	profesores.innerHTML = body
}
