import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  // title!: string;
  // desc!: string;

  userForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    desc: new FormControl('', Validators.required),
  });

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {

  }



  OnSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const todo = {
        sno: 8,
        title: String(this.userForm.value.title),
        desc: String(this.userForm.value.desc),
        active: true
      }
      this.todoAdd.emit(todo)
      this.userForm.reset();
    }

    // const todo = {
    //   sno: 8,
    //   title: this.title,
    //   desc: this.desc,
    //   active: true
    // }
    // this.todoAdd.emit(todo)
  }





}
