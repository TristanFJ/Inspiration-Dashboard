import {
  toDoService
} from "../Services/ToDoService.js";
export class ToDoController {
  constructor() {
    console.log('ToDoController connected');
  }

  createToDo() {
    window.event.preventDefault()
    const form = window.event.target
    let formData = {
      title: form.title.value
    }
    console.log('createToDo controller passed data');
    toDoService.createToDo(formData)
  }
}