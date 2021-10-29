import {
  ProxyState
} from "../AppState.js";
import {
  toDoService
} from "../Services/ToDoService.js";

function _drawToDo() {

  const toDos = ProxyState.toDos
  let template = ''
  toDos.forEach(t => template += t.Template)
  document.getElementById('todo').innerHTML = template
}

export class ToDoController {
  constructor() {
    ProxyState.on('toDos', _drawToDo)

  }

  async createToDo() {

    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = {
        description: form.description.value
      }
      console.log('createToDo controller passed data');
      await toDoService.createToDo(formData)
      form.reset()

    } catch (error) {
      console.error(error);
    }


  }

}