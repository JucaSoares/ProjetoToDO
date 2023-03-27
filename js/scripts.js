// Seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-form");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Funções
const saveTodo = (Text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = Text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("Button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("Button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("Button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();

}

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue);
    }

});

document.addEventListener("Click", (e) => {
    const targetEl = e.target;
    /*const parentEl = targetEl.closes("div");*/

    if (targetEl.classList.contains ("finish-todo")) {
        /*parentEl.classList.add("done");*/
        console.log("Clico finalizar");
    };
});