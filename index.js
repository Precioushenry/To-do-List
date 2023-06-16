//GETTING SELECTORS
const todoInput = document.querySelector('#input1');
const todoBtn = document.querySelector('.input2');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('.input-field');

let todos = [];

// events

form.addEventListener('submit', function (event) {
  //1. prevent form from reloading
  event.preventDefault();

  //2. get our input value
  const todo = todoInput.value;

  //3. add todo to array
  todos.push(todo);

  //4. clears input field
  todoInput.value = '';

  //5. display on DOM
  renderTodos(todos);
});

//a function that renders todos
const renderTodos = (arr) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');

  // create todo item ui and append to todoDiv
  const li = document.createElement('li');
  li.classList.add('todo-item');
  todoDiv.appendChild(li);

  //create checkbutton
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-check-double" style="color: #c81acb;"></i>';
  checkButton.classList.add('check');
  todoDiv.appendChild(checkButton);

  //create deletebutton
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: #b42752;"></i>';
  deleteButton.classList.add('trash');
  todoDiv.appendChild(deleteButton);

  //loop through todos-array
  for (i = 0; i < arr.length; i++) {
    const todoItem = arr[i];
    //added todo item into ui
    li.innerHTML = todoItem;

    todoList.appendChild(todoDiv);
  }
};

// know which todo you are clicking
todoList.addEventListener('click', function (event) {
  const target = event.target;

  // if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    console.log('delete');

    // write your delete here
  }

  if (target.classList[0] === 'check') {
    console.log('checkeeed');
  }

  console.log(target);
});
// know which todo you are clicking
todoList.addEventListener('click', function (event) {
  const target = event.target;

  // if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    console.log('delete');

    // Delete the corresponding task
    const todoItem = target.parentElement;
    const todoText = todoItem.querySelector('.todo-item').innerText;
    const index = todos.indexOf(todoText);
    if (index > -1) {
      todos.splice(index, 1);
    }

    // Remove the task from the DOM
    todoItem.remove();
  }

  if (target.classList[0] === 'check') {
    console.log('checked');
  }

  console.log(target);
});
// know which todo you are clicking
todoList.addEventListener('click', function (event) {
  const target = event.target;

  // if the target of our event has a class equal to trash
  if (target.classList[0] === 'trash') {
    console.log('delete');

    // Delete the corresponding task
    const todoItem = target.parentElement;
    const todoText = todoItem.querySelector('.todo-item').innerText;
    const index = todos.indexOf(todoText);
    if (index > -1) {
      todos.splice(index, 1);
    }

    // Remove the task from the DOM
    todoItem.remove();
  }

  if (target.classList[0] === 'check') {
    console.log('checked');

    // Add or remove the 'checked' class to/from the parent li element
    const todoItem = target.parentElement;
    todoItem.querySelector('.todo-item').classList.toggle('checked');
  }

  console.log(target);
});
