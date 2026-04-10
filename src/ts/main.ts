import { ToDoList } from "./todolist";

const todoList = new ToDoList();

// Hämta HTML-element från DOM
const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("uppgift-titel") as HTMLInputElement;
const select = document.getElementById("prioritet") as HTMLSelectElement;
const list = document.getElementById("todo-lista") as HTMLUListElement;

//Funktion för att visa todos
function renderTodos() {
    list.innerHTML = "";

    const todos = todoList.getTodos();

    todos.forEach((todo, index) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} (prio ${todo.priority})`;

        if (todo.completed) {
            li.style.textDecoration = "line-through";
        }

        const button = document.createElement("button");
        button.textContent = "Klar";

        button.addEventListener("click", () => {
            todoList.markTodoCompleted(index);
            renderTodos();
        });

        li.appendChild(button);
        list.appendChild(li);
    });
}

// Lyssna på formuläret
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = input.value;
    const priority = Number(select.value);

    const success = todoList.addToDo(task, priority);

    if (success) {
        renderTodos();
        form.reset();
    } else {
        alert("Felaktig input")
    }
});

// Visa todos vid start
renderTodos();