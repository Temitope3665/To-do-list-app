const inputTodo = document.querySelector('.add-to-do')
const addBtn = document.querySelector('.add-btn')
const deleteOption = document.querySelector('.delete-icon')
const todoList = document.querySelector('.my-form')
// const checkbox = document.querySelector('.input-check-box')
const pendingTask = document.querySelector('.pending-task')

let todoArray;

inputTodo.onkeyup = () => {
    // store inputTodo.value into a variable
    let inputValue = inputTodo.value;

    if (inputValue.trim() != 0) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    };
}

displayTasks(); // This is called to display the tasks


addBtn.onclick = () => {

    
    let inputValue = inputTodo.value // Getting the value
    
    if (inputValue !== '') {
        console.log(inputValue)
        let getLocalStoageTodoData  = localStorage.getItem('Task List') // This is used to get items from local storage, we name it 'task list'
        console.log('local storage', getLocalStoageTodoData)

        if (getLocalStoageTodoData == null) {
            todoArray = []
        } else {
            todoArray = JSON.parse(getLocalStoageTodoData)
        };

        todoArray.unshift(inputValue) // Display tasks from the beginning

        localStorage.setItem('Task List', JSON.stringify(todoArray)) // We set/add the items to the local storage. we convert our item using JSON.stringify

        displayTasks();

        addBtn.classList.remove('active') // This removes the active on the add button
    }

}

// function to display the task
function displayTasks() {
    let getLocalStoageTodoData = localStorage.getItem('Task List')

    // let todoArray;
    if (getLocalStoageTodoData == null) {
        todoArray = []
    } else {
        todoArray = JSON.parse(getLocalStoageTodoData) // this converts to javascript object
    };
    
    let listTask = ''

    let indexOfArray = 0

    for (let task of todoArray) {

          // Add checkbox and other items
        listTask += `<li> <input type='checkbox' class='checkbox' value="" id="flexCheckChecked" /> ${task} <img class="delete-icon" id=${indexOfArray++} src="./icons/delete.svg" alt="delete" width="18" height="18" /></li>`
        
    }

    todoList.innerHTML = listTask // add li to the ul
    inputTodo.value = '' // This empty the input text area after adding

    pendingTask.innerHTML = `You have ${todoArray.length} task`
    if (todoArray.length === 0) {
        pendingTask.innerHTML = `You have no pending task`
    }

}


const checkBoxClick = document.querySelector('.checkbox')
    if (checkBoxClick.checked == true) {
        console.log('checkBoxClick')
    }


// Remove items
const deleteTodo = document.querySelector('.delete-icon')

function deleteTodoTask(id) {
    todoArray = todoArray.filter((item, index) => {
        return index != id
    })
    localStorage.setItem('Task List', JSON.stringify(todoArray))
}

todoList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-icon')) { // this target the delete button
        let idElement = event.target.id
        deleteTodoTask(idElement)
        displayTasks();
    }
})

