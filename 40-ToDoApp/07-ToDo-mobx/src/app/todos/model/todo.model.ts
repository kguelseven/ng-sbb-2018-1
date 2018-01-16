import {observable} from 'mobx';

export class ToDo {
  @observable id: string;
  @observable title: String;
  @observable completed: boolean;

  constructor(title: String = '') {
    this.completed = false;
    this.title = title.trim();
  }
}
