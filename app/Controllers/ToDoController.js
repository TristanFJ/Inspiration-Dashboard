import {
  ProxyState
} from "../AppState.js";
import {
  toDoService
} from "../Services/ToDoService.js";

function _drawToDo() {
  let toDos = ProxyState.toDos
  let template = ''
  const toDoPage = document.getElementById('todo')
  toDos.forEach(t => template += t.Template)
  toDoPage.innerHTML = template
}

export class ToDoController {
  constructor() {
    this.getToDo()
    ProxyState.on('toDos', _drawToDo)

  }

  async createToDo() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = {
        description: form.description.value
      }
      await toDoService.createToDo(formData)
      this.getToDo()
      form.reset()
    } catch (error) {
      console.error(error);
    }
  }

  async getToDo() {
    try {
      await toDoService.getToDo()
    } catch (error) {
      console.error(error);
    }
  }

  async deleteToDo(id) {

    try {
      await toDoService.deleteToDo(id)
      this.getToDo()
    } catch (e) {
      console.error(e);
    }
  }

  async toggleCheck(id) {

    try {
      await toDoService.toggleCheck(id)
      this.getToDo()
    } catch (e) {
      console.error(e);
    }

  }

  countToDos() {
    toDoService.countToDos()
  }
}