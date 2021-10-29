export class ToDo{

  constructor(data){
    this.id = data.id 
    this.completed = data.completed || false
    this.user = data.user 
    this.description = data.description || ''
  }
}