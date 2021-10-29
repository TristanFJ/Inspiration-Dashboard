import { ToDoController } from "./Controllers/ToDoController.js";

class App {

  toDoController = new ToDoController()
}

window["app"] = new App();
