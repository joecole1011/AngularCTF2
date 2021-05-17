import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  title = 'ToDoListComponent';

  // @ViewChildren(TaskItemComponent)
  // taskIteam : QueryList<TaskItemComponent>

  tasks: Task[];

  name;
  items = [];

  description;
  items2 = [];

  id = 0;

  constructor() {
    this.tasks = [];
    // this.tasks = [];
    // this.tasks.push({
    //   id: 1,
    //   name: 'Akawit',
    //   description: 'Nasoke'
    // });
    // this.tasks.push({
    //   id: 2,
    //   name: 'Kim',
    //   description: 'Zun'
    // });
    // this.tasks.push({
    //   id: 3,
    //   name: 'Nam',
    //   description: 'Fha'
      
    // });
  }
  ngOnInit() {}

  selectedTask(tack:Task){
    alert(`Task ${tack.name} selected`)
  }

  addclick() {
    if (this.name == '') {
    } else {
      this.items.push(this.name);
      this.name = '';
    }

    if (this.description == '') {
    } else {
      this.items2.push(this.description);
      this.description = '';
    }
    this.id++;
  }

  public deletetask(index) {
    this.items.splice(index, 1);
    this.items2.splice(index, 1);
  }

  // addclick() {
  //   if (this.name == '') {
  //   } else {
  //     this.items.push(this.name);
  //     this.name = '';
  //   }

  //   if (this.description == '') {
  //   } else {
  //     this.items2.push(this.description);
  //     this.description = '';
  //   }
  //   this.id++
  // }

  // public deletetask(index) {
  //   this.items.splice(index, 1);
  //   this.items2.splice(index, 1);
  // }
}
