import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoOverviewPageComponent } from './pages/todo-overview-page/todo-overview-page.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';

const routes: Routes = [
  {path: 'overview', component: TodoOverviewPageComponent},
  {path: 'details/:id', component: TodoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
