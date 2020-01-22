import { Component, OnInit } from '@angular/core';
import * as fromFiltro from "../../filter/filter.action";
import { Store } from '@ngrx/store';
import { appState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import { ClearAllTodo } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos:fromFiltro.filtrosValidos[]= ["todos","completados","pendientes"];
  filtroActual:fromFiltro.filtrosValidos;
  pendientes:number;
  filtro:fromFiltro.filtrosValidos;

  constructor(private store:Store<appState>) { }

  ngOnInit() {
    this.store.subscribe(state=>{
      this.filtroActual= state.filtro;
      this.contarPendientes(state.todos);
     
    });
  }

  cambiarFiltro(nuevoFiltro:fromFiltro.filtrosValidos){
    
    const accion= new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  clearCompleted(){
    const accion = new ClearAllTodo();
    this.store.dispatch(accion);
  }

}
