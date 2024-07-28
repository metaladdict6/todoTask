import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../models/todo';

@Pipe({
  name: 'countTasks',
  standalone: false
})
export class CountTasksPipe implements PipeTransform {

  transform(todo: Todo): number {
    return todo.tasks.length;
  }

}
