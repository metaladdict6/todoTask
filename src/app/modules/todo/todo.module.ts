import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoOverviewPageComponent } from './pages/todo-overview-page/todo-overview-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CountTasksPipe } from '../../shared/pipes/countTask/count-tasks.pipe';


@NgModule({
  declarations: [
    TodoDetailComponent,
    TodoOverviewPageComponent,
    CountTasksPipe
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule, 
    MatButtonModule, 
  ],
  providers: [
    CountTasksPipe
  ]
})
export class TodoModule { }
