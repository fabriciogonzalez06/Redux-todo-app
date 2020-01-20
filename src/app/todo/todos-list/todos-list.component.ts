import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private store: Store<appState>) { }
  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
    });
  }

}
