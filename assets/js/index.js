import DB from './db.js';
import { studentsListElement, updateStudentFormElement} from './variables.js';
import { appendStudent } from './utils.js';

let database = new DB('https://frontend-lectures.firebaseio.com');

console.log('database', database);

let studentsList = [];

database.getStudents().then(result => {
	studentsList = Object.values(result);

	console.log('studentsList', studentsList);
	studentsList.forEach(student => appendStudent(student, studentsListElement));
});

studentsListElement.addEventListener('click', event => {
	let target = event.target;

	if (!target.hasAttribute('data-id')) return;

	event.preventDefault();
	console.log(target);

	let studentId = target.getAttribute('data-id');
	console.log(studentId);

	database.getStudentById(studentId).then(response => {
		console.log('response', response);

		for (let key in response) {
			if (updateStudentFormElement.elemtns[key]){
				updateStudentFormElement.elements[key].value = response[key];
			}
		}

	});
});

updateStudentFormElement.addEventListener('submit', function(event) {
	event.preventDefault();
	
let data = {};

	for (let key in this.elements) {
		if (!this.elements[key].hasAttribute || !this.elements[key].hasAttribute('name')) continue;

		data[this.elements[key].getAttribute('name')] = this.elements[key].value; 
	}
	console.log(data);
});