console.log('working')
// we define an event listener for the button
// document.querySelector('button').onclick = function () {
// 	console.log('click')
// }

// name of the event, callback
document.querySelector('button').addEventListener('click', addTodo);

function addTodo() {
	console.log('click')
	// we get the value from the input field
	const input = document.querySelector('input').value
	console.log(input)
	// we create an li tag
	const todo = document.createElement('li')
	todo.innerHTML = input
	console.log(todo)
	// we add this todo to the list - we use 'appendChild()'
	// get the list - the parent element
	const list = document.querySelector('ul')
	console.log(list)
	// append the todo to the list 
	// this does not work - the parameter has to be a dom node
	list.appendChild(todo)
}