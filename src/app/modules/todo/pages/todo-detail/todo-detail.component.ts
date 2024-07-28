import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../../shared/models/todo';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TodoService } from '../../../../core/http/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {
  
  todo:Todo = new Todo();
  currentTypeSelection: string = '';
  typeSelection: string[] = ["Work", "Personal", "Leisure", "Education", "Health"];

  constructor(private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); 
    this.todoService.getTodo(Number(id)).subscribe(value => {
      if (value) {
        this.todo = value
        this.currentTypeSelection = this.todo.type;
      }
    });
  }
  

  save() {
    if (this.todo.id) {
      this.updateTodo();
    } else {
      this.saveTodo();
    }
  }
  
  saveTodo() {
    throw new Error('Method not implemented.');
  }

  updateTodo() {
    throw new Error('Method not implemented.');
  }

}