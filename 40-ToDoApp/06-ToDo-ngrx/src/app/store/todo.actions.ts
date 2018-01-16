import {Action} from '@ngrx/store';
import {ToDo} from '../todos/model/todo.model';

export const LOAD_TODOS = '[ToDos] Load ToDos';
export const LOAD_TODOS_SUCCESS = '[ToDos] Load ToDos Success';
export const LOAD_TODOS_FAIL = '[ToDos] Load ToDos Fail';

export class LoadToDos implements Action {
  readonly type = LOAD_TODOS;
}

export class LoadToDosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;

  constructor(public payload: ToDo[]) {
  }
}

export class LoadToDosFail implements Action {
  readonly type = LOAD_TODOS_FAIL;

  constructor(public payload: any) {
  }
}


export const CREATE_TODO = '[ToDos] Create ToDo';
export const CREATE_TODO_SUCCESS = '[ToDos] Create Success';
export const CREATE_TODO_FAIL = '[ToDos] Create Fail';

export class CreateToDo implements Action {
  readonly type = CREATE_TODO;

  constructor(public payload: ToDo) {
  }
}

export class CreateToDoSuccess implements Action {
  readonly type = CREATE_TODO_SUCCESS;

  constructor(public payload: ToDo) {
  }
}

export class CreateToDoFail implements Action {
  readonly type = CREATE_TODO_FAIL;

  constructor(public payload: any) {
  }
}


export const COMPLETE_TODO = '[ToDos] Complete ToDo';

export class CompleteToDo implements Action {
  readonly type = COMPLETE_TODO;

  constructor(public payload: ToDo) {
  }
}

export const REMOVE_TODO = '[ToDos] Remove ToDo';

export class RemoveToDo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: ToDo) {
  }
}


export type ToDoAction =
  | LoadToDos
  | LoadToDosSuccess
  | LoadToDosFail
  | CreateToDo
  | CreateToDoSuccess
  | CreateToDoFail
  | CompleteToDo
  | RemoveToDo;
