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
}
export const toDoService = new ToDoService();