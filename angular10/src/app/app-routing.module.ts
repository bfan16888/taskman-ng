import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component';
import {TaskComponent} from './task/task.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'task',component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
