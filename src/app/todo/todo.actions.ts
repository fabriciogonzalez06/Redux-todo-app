import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDITAR_TODO =  '[TODO] Editar todo';
export const BORRAR_TODO ='[TODO] Borrar todo';
export const TOGGLE_ALL= '[TODO] Toggle all todo';
export const CLEAR_ALL_TODO ='[TODO] Clear all todo';

//Agregar todo
export class AgregarTodoAction implements Action {

    readonly type = AGREGAR_TODO;

    constructor(public texto: string) { }
}

//completado o no 
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) {

    }
}


//editar todo 
export class EditarTodoAction implements Action{
    readonly type= EDITAR_TODO;

    constructor(public id:number, public text:string){}
}

//Borrar todo
export class BorrarTodoAction implements Action{
    readonly type = BORRAR_TODO;
    constructor(public id:number){}
}

//marcar como compleatdos todos
export class ToggleAllTodo implements Action{
    readonly type= TOGGLE_ALL;
    constructor (public completado:boolean){}
}

//borrar todos los todos
export class ClearAllTodo implements Action{
    readonly type = CLEAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction 
                    | ToggleTodoAction
                    | EditarTodoAction
                    | BorrarTodoAction
                    |ToggleAllTodo 
                    | ClearAllTodo;