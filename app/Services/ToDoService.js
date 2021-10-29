class ToDoService {

  constructor() {
    console.log('ToDoService connected');
  }

  createToDo(formData) {
    console.log(formData.title);

  }
}
export const toDoService = new ToDoService();