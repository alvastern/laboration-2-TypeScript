export { ToDoList };

// Skapar ett interdace för att definiera strukturen i ett todo-objekt
interface ToDo {
  task: string;
  completed: boolean;
  priority: number;
}

// En klass för att hantera todo-listan
class ToDoList {
  todos: ToDo[];

  // Constructor som startar todo-listan och laddar data från local storage
  constructor() {
    this.todos = [];
    this.loadFromLocalStorage();
  }

  // En metod för att lägga till en ny punkt i listan
  addToDo(task: string, priority: number): boolean {
    if (!task || priority < 1 || priority > 3) {
      return false;
    }

    const newToDo: ToDo = {
      task,
      completed: false,
      priority,
    };

    this.todos.push(newToDo);
    this.saveToLocalStorage();
    return true;
  }

  // Metod för att markera en punkt som är färdig
  markTodoCompleted(todoIndex: number): void {
    if (this.todos[todoIndex]) {
      this.todos[todoIndex].completed = true;
      this.saveToLocalStorage();
    }
  }

  // Metod för att ta bort en punkt från listan
  getTodos(): ToDo[] {
    return this.todos;
  }

  // Metod för att spara listan i användarens local storage
  saveToLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  // Metod som laddar listan från local storage när sidan laddas
  loadFromLocalStorage(): void {
    const data = localStorage.getItem("todos");
    if (data) {
      this.todos = JSON.parse(data);
    }
  }
}