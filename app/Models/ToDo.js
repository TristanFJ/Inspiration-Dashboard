export class ToDo {

  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description || ''
  }

  get Template() {
    return `
    

    <div class="row align-items-center">
    <div class="col-10">
    <input onclick="app.toDoController.toggleCheck('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
    ${this.completed ? 'checked' : ''}>
    <label for="${this.id}" style="${this.completed ? 'text-decoration: line-through;'
    : ''
    }">${this.description}</label>
    </div>
    <div class="col-2 my-1">
    <button class="btn btn-sm btn-danger" onclick="app.toDoController.deleteToDo('${this.id}')">x</button><br>
    </div>
    
    </div>
    
    `
  }
}