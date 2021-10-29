import {
  ProxyState
} from "../AppState.js";

import {
  ToDo
} from "../Models/ToDo.js";

import {
  sandboxApi
} from "./AxiosService.js";



class ToDoService {

  constructor() {}
  async createToDo(formData) {
    console.log(formData);
    let toDos = ProxyState.toDos
    const toDo = new ToDo(formData)
    toDos = [...toDos, toDo]
    console.log(ProxyState.toDos);
    const res = await sandboxApi.post('Tristan/todos', toDo)
    console.log(res.data);
  }

  async getToDo() {
    const res = await sandboxApi.get('Tristan/todos')
    const toDos = res.data.map(t => new ToDo(t))
    ProxyState.toDos = toDos
    let totalToDos = toDos.length
    let done = toDos.filter(done => done.completed == true)
    let totalCompleted = done.length
    console.log(totalToDos + " : " + totalCompleted);
    document.getElementById('completed').innerHTML = (totalToDos + " : " + totalCompleted)
  }

  async deleteToDo(id) {

    if (window.confirm("delete to-do?")) {
      let toDos = ProxyState.toDos
      const res = await sandboxApi.delete('Tristan/todos/' + id)
      toDos = toDos.filter(t => t.id != id)
    }
  }


  async toggleCheck(id) {
    let toDos = ProxyState.toDos
    const found = toDos.find(t => t.id === id)
    found.completed = !found.completed
    const res = await sandboxApi.put('Tristan/todos/' + found.id, found)
    toDos = toDos
  }

  // countToDos() {
  //   let toDos = ProxyState.toDos
  //   totalToDos = toDos.length
  //   let done = toDos.filter(done => done.completed == true)
  //   let totalCompleted = done.length
  //   console.log(totalToDos + " : " + totalCompleted);
  //   document.getElementById('completed').innerHTML = (totalToDos + " : " + totalCompleted)
  // }


}
export const toDoService = new ToDoService();