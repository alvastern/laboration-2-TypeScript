import { ToDoList } from "./todolist";
import "../css/main.scss";

const todoList = new ToDoList();

// Hämta HTML-element från DOM
const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("uppgift-titel") as HTMLInputElement;
const select = document.getElementById("prioritet") as HTMLSelectElement;
const list = document.getElementById("todo-lista") as HTMLUListElement;
const completedList = document.getElementById("avslutade-list") as HTMLUListElement;

//Funktion för att visa todos
function renderTodos() {
    list.innerHTML = "";
    completedList.innerHTML = "";

    const todos = todoList.getTodos();

    // Loopar igenom alla todos och skapar listobjekt för varje punkt
    todos.forEach((todo, index) => {

        // Skapa ett listobjekt för varje todo
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.textContent = `${todo.task} (prio ${todo.priority})`;

        // Skapa en knapp för att markera som klar
        const button = document.createElement("button");
        button.classList.add("complete-button");
        button.textContent = "Klar";

        // Skapa en knapp för att ta bort todo
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Ta bort";

        // Event listener för att ta bort todo
        deleteButton.addEventListener("click", () => {
            todoList.getTodos().splice(index, 1);
            todoList.saveToLocalStorage();
            renderTodos();
        });

        // Event listener för att markera todo som klar
        button.addEventListener("click", () => {
            todoList.markTodoCompleted(index);
            renderTodos();
        });

        if (!todo.completed) {
            li.appendChild(button);
        }

        li.appendChild(deleteButton);

        if (todo.completed) {
            completedList.appendChild(li);
        } else {
            list.appendChild(li);
        }
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