import { Todo } from './todo/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFiltro  from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.action';

export interface appState {
    todos: Todo[];
    filtro:fromFiltroActions.filtrosValidos;
}

export const appReducers:ActionReducerMap<appState> ={
    todos:fromTodo.todoReducer,
    filtro:fromFiltro.filtroReducer
};