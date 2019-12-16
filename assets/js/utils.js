export function appendStudent(data, targetElement) {
	consol.log('data', data);
	let listItem = document.createElement('a');

	listItem.href = '';
	listItem.classList.add('list-group-item');
	listItem.innerText =  `${data.lastname} ${data.firstname}`;
	listItem.setAttribute

	targetElement.appendChild(lastItem)
}