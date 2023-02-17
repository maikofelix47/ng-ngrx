import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addToDo, removeTodo } from './todo.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  title = 'ng-ngrx-todo-list';
  todos$:Observable<string[]>;
  toDo: string = '';
  constructor(private store: Store<{todos: string[]}>){
    this.todos$ =  this.store.select("todos");
  }
  ngOnInit(): void {
    
  }
  public addTodo(){
    this.store.dispatch(addToDo({toDo: this.toDo}));
    this.clearTextInput();
  }
  public clearTextInput(){
    this.toDo = '';
  }
  public removeTodo(toDo: string){
      this.store.dispatch(removeTodo({
        toDo
      }));
  }

}
