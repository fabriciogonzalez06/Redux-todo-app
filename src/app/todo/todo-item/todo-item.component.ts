import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { ToggleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', { static: false }) txtInputFisico: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<appState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto);

    this.chkField.valueChanges.subscribe(() => {

      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editando = true;

    setTimeout(() => {

      this.txtInputFisico.nativeElement.select();
    }, 1);



  }

  terminarEdicion() {
    this.editando = false;
  }
}
