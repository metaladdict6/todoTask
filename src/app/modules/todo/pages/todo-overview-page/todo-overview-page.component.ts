import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../../shared/models/todo';
import { TODO_MOCK_DATA } from '../../../../core/mock/todo-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-overview-page',
  templateUrl: './todo-overview-page.component.html',
  styleUrl: './todo-overview-page.component.css'
})
export class TodoOverviewPageComponent implements OnInit {

  todos: Todo[] = TODO_MOCK_DATA;

  displayedColumns = ['name', 'description', 'task'];
  dataSource = TODO_MOCK_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Loading overview");
  }

  navigateToTodo(todo: Todo) {
    console.log("navigate");
    this.router.navigate([`todo/details/${todo.id}`]);
  }
}
