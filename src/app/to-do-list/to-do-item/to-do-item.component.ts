import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input()
  task: Task;
  tasks: Task[];

  @Output()
  OnSelected: EventEmitter<ToDoItemComponent> = new EventEmitter();
  OnDeleted: EventEmitter<ToDoItemComponent> = new EventEmitter();
  
  isSelected: boolean;

  isDeleted: boolean;

  constructor() {}

  ngOnInit(): void {}

  select() {
    this.OnSelected.emit(this);
  }
  delete() {
    this.OnDeleted.emit(this);
    this.task.name = '';
    this.task.description = '';

    // this.tasks.slice()

    // }
  }
  //ts
  // CreateUser:string = "Enter UserName"

  // userlist = []
  // onclick(prouser){
    
  //   if(prouser.value.length > 0)
  //   {
  //     this.userlist.push(prouser.value);
  //     prouser.value = '';
  //   }
  // }

  // ondelete(deleteme)
  // {
  //   this.userlist.splice(deleteme,1)
  // }

  //Summary
  //ref variable
  //attibute binding
  //click event
  //function with parameter
  //Array
  //Array push method
  //Array splice method
  //ngfor structural directives
  //if condition
  //html
  



}
