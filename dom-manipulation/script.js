// dom manipulation
// document object model
console.log(document);

// 

const todoList = document.getElementById('todo-list')
console.log(todoList)

// this returns an 'HTML collection'
// this is not an array but can be treated as one
const todoListItems = document.getElementsByTagName('li')
console.log(todoListItems[0])
console.clear()
// read the information / text in between the tags
// innerText / textContent
console.log(todoListItems[4].innerText)
todoListItems[4].innerText = 'watch devs'

// turn all todolist items to uppercase 
for (let item of todoListItems) {
	// console.log(item)
	item.innerText = item.innerText.toUpperCase()
}
console.clear()
// this returns an HTML collection as well
// const container = document.getElementsByClassName('todo-container')
// console.log(container[0])

// use querySelector - querySelectorAll
const container = document.querySelector('.todo-container')

console.log(container)

// use CSS query
// querySelectorAll returns a 'NodeList'
const listItems = document.querySelectorAll('#todo-list li')
console.log(listItems)
// we can use forEach on a node list
listItems.forEach(function (node) {
	console.log(node)
})
console.clear()

const firstItem = document.querySelector('#todo-list li')
console.log(firstItem)

// change the css 
// firstItem.style.backgroundColor = 'red';
// firstItem.style.backgroundColor = 'green';
// if the property is a variable we use the brackets
// const prop = 'backgroundColor'
// firstItem.style[prop] = 'red';
const classList = firstItem.classList
console.log(classList)
// firstItem.classList.add('checked')
// firstItem.classList.remove('checked')

// toggles the class checked
firstItem.classList.toggle('checked')
firstItem.classList.toggle('checked')
console.log(classList)
console.clear()

// we can set any attribute on an element
firstItem.setAttribute('id', 'first-item')


// we can fix the broken image
// document.querySelector('img').setAttribute(
// 	'src',
// 	'https://media.istockphoto.com/photos/funny-west-highland-white-terrier-dog-decorated-with-photo-props-sits-picture-id1292884801'
// )

// innerHTML - executes the string as html 
// document.body.innerText = '<h1>🙈</h1>'

// we wanna add a heading
// first we create that heading
const heading = document.createElement('h1')
heading.innerText = 'My Todo List'
console.log(heading)
// to insert it we use 'insertBefore' on the parent element

const list = document.querySelector('#todo-list')
const parentElement = document.querySelector('.todo-container')
console.log(list)
console.log(parentElement)
// what to insert, before which
parentElement.insertBefore(heading, list)

