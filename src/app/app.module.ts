import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonComponent } from './components/list-person/list-person.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { ViewComponentComponent } from './components/view-component/view-component.component';
import { UpdateComponentComponent } from './components/update-component/update-component.component'
@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    AddPersonComponent,
    ViewComponentComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
