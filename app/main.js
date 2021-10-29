import {
  TimeController
} from "./Controllers/TimeController.js";
import {
  ToDoController
} from "./Controllers/ToDoController.js";

class App {

  toDoController = new ToDoController()
  timeController = new TimeController()
}

window["app"] = new App();