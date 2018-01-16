export class ToDo {
  id: number;
  title: String;
  completed: boolean;

  constructor(title: String = '', id?: number) {
    this.id = id;
    this.title = title.trim();
    this.completed = false;
  }
}
