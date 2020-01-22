import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import * as fromFiltro from "../../filter/filter.action";
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro:fromFiltro.filtrosValidos;
  constructor(private store: Store<appState>) { }
  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filtro= state.filtro;
    });
  }

}
