export function appendStudent(data, targetElement) {
	console.log('data', data);
	let listItem = document.createElement('a');

	listItem.href = '';
	listItem.classList.add('list-group-item');
	listItem.innerText =  `${data.lastname} ${data.firstname}`;
	// listItem.setAttribute

	targetElement.appendChild(listItem)
}