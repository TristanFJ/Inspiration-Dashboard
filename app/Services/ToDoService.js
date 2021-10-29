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
    ProxyState.toDos
    const res = await sandboxApi.get('Tristan/todos')
    ProxyState.toDos = res.data
  }

  async deleteToDo(id) {
    let toDos = ProxyState.toDos
    const res = await sandboxApi.delete('Tristan/todos/' + id)
    toDos = toDos.filter(t => t.id != id)
  }


  async toggleCheck(id) {
    let toDos = ProxyState.toDos
    const found = toDos.find(t => t.id === id)
    found.completed = !found.completed
    const res = await sandboxApi.put('Tristan/todos/' + found.id, found)
    toDos = toDos
  }

}
export const toDoService = new ToDoService();