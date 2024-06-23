import { Injectable } from '@angular/core';
import { Todo } from '../../shared/models/todo';
import { TODO_MOCK_DATA } from '../mock/todo-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  todos: Todo[] = TODO_MOCK_DATA;

  constructor() { }

  getTodo(id: number): Observable<Todo | undefined> {
    return of( this.todos.find(todo => todo.id === id));
  }
}
