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
    let toDos = ProxyState.toDos
    const res = await sandboxApi.get('Tristan/todos')
    toDos = res.data
    console.log('res.data: ', res.data);

  }
}
export const toDoService = new ToDoService();