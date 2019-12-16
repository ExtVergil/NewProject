export default class DB {
	constructor(url) {
		this.apiUrl = url;
	}

	getStudents() {
		return fetch(`${this.apiUrl}/api/vl/students.json`).then(_ => {
			console.log(_.json())
			return _.json();
		});
	}
	getStudentById(id) {
		return fetch(`${this.apiUrl}/api/vl/students/${id}.json`).then(_ =>_.json());
	}
	updateStudent(id, data) {
		return fetch(`${this.apiUrl}/api/vl/students/${id}.json`, {
			method: 'PUT',
			body: JSON.stringify(data)
		}).then(_ =>_.json());
	}

	createSTudent(data) {
		return fetch(`${this.apiUrl}/api/vl/students.json`, {
			method: 'POST',
			body: JSON.stringify(data)
		})
	}
	deleteStudent(id) {
		return fetch(`${this.apiUrl}/api/vl/students/${id}.json`, {
			method: 'DELETE',
			body: JSON.stringify(data)
		}).then(_ =>_.json());
	}
}