console.log('working')
// we define an event listener for the button
// document.querySelector('button').onclick = function () {
// 	console.log('click')
// }

// we get all todos and add an event listener for every one of them 
// via a loop
document.querySelectorAll('ul > li').forEach(function (todo) {
	// console.log(todo)
	todo.addEventListener('click', toggleTodo)
})


// name of the event, callback
document.querySelector('button').addEventListener('click', addTodo);

function toggleTodo(event) {
	// console.log(event.target)
	// toggle the class 'checked' on the clicked list element
	// event.target.classList.toggle('checked')

	// to delete the todo item:
	// we use <parentElement>.removeChild(<the element to be removed>)
	const ul = document.querySelector('ul')
	// using .parentNode on a node element you can go up one level in the document
	// const parent = event.target.parentNode.parentNode
	// console.log(parent)
	ul.removeChild(event.target)
	// you can also call remove() on the dom element itself
	// event.target.remove()
}

function addTodo() {
	console.log('click')
	// we get the value from the input field
	const input = document.querySelector('input')
	console.log(input)
	// we create an li tag
	const todo = document.createElement('li')
	todo.innerText = input.value
	// we also add en event listener to toggle the todo item
	todo.addEventListener('click', toggleTodo)
	console.log(todo)
	// we add this todo to the list - we use 'appendChild()'
	// get the list - the parent element
	const list = document.querySelector('ul')
	console.log(list)
	// append the todo to the list 
	// this does not work - the parameter has to be a dom node
	list.appendChild(todo)
	input.value = ''
}