import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { appState } from '../app.reducers';
import { TOGGLE_ALL, ToggleAllTodo } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  compleatado=false;
  constructor(private store:Store<appState>) { }

  ngOnInit() {
  }


  //marcar todos
  toggleAll(){
    this.compleatado=!this.compleatado;

    const action = new ToggleAllTodo(this.compleatado);
    this.store.dispatch(action);
  }

}
