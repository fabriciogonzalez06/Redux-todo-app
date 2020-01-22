import { Pipe, PipeTransform } from '@angular/core';
import * as fromFiltro from "./filter.action";
import { Todo } from '../todo/models/todo.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {
    console.log(todos);
    console.log(filtro);

    switch(filtro){
      case "completados":
        return todos.filter(todo=> todo.completado);
      case "pendientes":
        return todos.filter(todo=>!todo.completado);
      default:
        return todos;
    }
    
    return todos;
  }

}
