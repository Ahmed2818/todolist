var form = document.getElementById('form')
var input = document.getElementById('input')
var todoul = document.getElementById('todos')

var todos = JSON.parse(localStorage.getItem('todos'))

    if(todos){
        todos.forEach(todo => addTodo(todo))
    }

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo){
    let todoText = input.value

    if(todo){
        todoText = todo.text
    }


    if(todoText){
        var todoEl= document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed')
        updatels()
    
    })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updatels()
        })

        todoul.appendChild(todoEl)

        input.value = ''

        updatels()
    }
}

function updatels(){
    todoEl = document.querySelectorAll('li')

    var todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}