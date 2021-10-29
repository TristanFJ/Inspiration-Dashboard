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
  toDos.forEach(t => template += `
  
  <div class="row align-items-center">
  <div class="col-10">
  <input onclick="app.toDoController.toggleCheck('${t.id}')" type="checkbox" id="${t.id}" name="${t.id}"
  ${t.completed ? 'checked' : ''}>
  <label for="${t.id}" style="${t.completed ? 'text-decoration: line-through;'
  : ''
  }">${t.description}</label>
  </div>
  <div class="col-2 my-1">
  <button class="btn btn-sm btn-danger" onclick="app.toDoController.deleteToDo('${t.id}')">x</button><br>
  </div>
  
  </div>

  
  `)
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
      console.log('createToDo controller passed data');
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
}