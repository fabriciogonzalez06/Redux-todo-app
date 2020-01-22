import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';
import { TOGGLE_ALL } from './todo.actions';




const estadoInicial: Todo[] = [new Todo('vencear a tanos'), new Todo('Vencer el mal')];



export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {

    //simepre regresar nuevos estados

    switch (action.type) {
        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            //se agrega un elemento mas el arreglo actual de todos, no se hace push porque se muta
            return [...state, todo];
        case fromTodo.TOGGLE_TODO:

            //hay que tener cuidado con el paso por referencia,
            //si se cambia algo mandar un nuevo array
            return state.map(todoEdit => {

                if (todoEdit.id === action.id) {

                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            });
        
        //marcar o desmarcar todos los todos
        case TOGGLE_ALL:
            return state.map(todoEdit=>{
                return {
                    ...todoEdit,
                    completado:action.completado
                }
            });
        //editar
        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit=>{
                if(todoEdit.id === action.id){
                   
                 
                   
                    return {
                         ...todoEdit,
                         texto:action.text
                     }
                }else {
                    return todoEdit;
                }
            }); 
        //eliminar 
        case fromTodo.BORRAR_TODO:
            return state.filter(todo => todo.id !== action.id);
        //eliminar todos
        case fromTodo.CLEAR_ALL_TODO:
            return state.filter(todo => !todo.completado);
        
        default:
            return state;
    }

}