import { UpdateComponentComponent } from './components/update-component/update-component.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'persons',
    component: ListPersonComponent,
  },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'view-person/:id', component: ViewComponentComponent },
  { path: 'update-person/:id', component: UpdateComponentComponent },
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: '**', redirectTo: '/persons', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
