import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './todos/todo.reducers';
import { TodosComponent } from './todos/todos.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      todos: todosReducer,
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
