let todoList = [];
// renderTodoList();

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
   const inputNameElement = document.querySelector('.js-name-input');
   const inputDateElement = document.querySelector('.js-date-input');
   const name = inputNameElement.value;
   const date = inputDateElement.value;
   todoList.push({name, date});
   console.log(todoList);
   renderTodoList();
   inputNameElement.value = '';
   inputDateElement.value = '';
}

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name , date} = todoObject;
     let html = ` 
     <div>${name}</div>
     <div>${date}</div>
     <button class="delete-todo-button js-delete-todo-button">Delete</button>
     `;
     todoListHTML += html;
  });
  
  // for (let i = 0; i < todoList.length; i++) {
  //    const todoObject = todoList[i];
  //    const {name , date} = todoObject;
  //    let html = ` 
  //    <div>${name}</div>
  //    <div>${date}</div>
  //    <button class="delete-todo-button" onclick="
  //      todoList.splice(${i}, 1);
  //      renderTodoList();
  //    ">Delete</button>
  //    `;
  //    todoListHTML += html;
  // }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {deleteButton.addEventListener('click' , () => {
    todoList.splice(index, 1);
    renderTodoList();
  });
});
}