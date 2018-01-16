import {ToDo} from '../todos/model/todo.model';
import {COMPLETE_TODO, CREATE_TODO_SUCCESS, LOAD_TODOS_SUCCESS, REMOVE_TODO, ToDoAction} from './todo.actions';

export interface IAppState {
  pendingTodos: ToDo[];
  doneTodos: ToDo[];
}

const initialTodos = [];

export const initialState: { todos: IAppState } = {
  todos: {
    pendingTodos: initialTodos,
    doneTodos: []
  }
};

export function todoReducer(state, action: ToDoAction) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS: {
      const pendingTodos = action.payload.filter(t => !t.completed );
      const doneTodos = action.payload.filter(t => t.completed );
      return { ...state, ...{pendingTodos, doneTodos}};
    }
    case CREATE_TODO_SUCCESS: {
      return {...state, ...{pendingTodos: [...state.pendingTodos, action.payload]}};
    }
    case COMPLETE_TODO: {
      const todo = action.payload;
      todo.completed = true;
      const pendingTodos = state.pendingTodos.filter(t => t !== todo);
      const doneTodos = [...state.doneTodos, todo];
      return {...state, ...{pendingTodos, doneTodos}};
    }
    default:
      return state;
  }
}


