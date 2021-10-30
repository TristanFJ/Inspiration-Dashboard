import {
  ImageController
} from "./Controllers/ImageController.js";
import {
  QuoteController
} from "./Controllers/QuoteController.js";
import {
  TempController
} from "./Controllers/TempController.js";
import {
  TimeController
} from "./Controllers/TimeController.js";
import {
  ToDoController
} from "./Controllers/ToDoController.js";

class App {

  toDoController = new ToDoController()
  timeController = new TimeController()
  quoteController = new QuoteController()
  imageController = new ImageController()
  tempController = new TempController()
}

window["app"] = new App();