import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'todo',
        loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule)
      }
];
