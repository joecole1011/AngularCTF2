import { Component, OnInit, ViewChild } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Task } from './to-do-list/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('taskList', { static: true })
  taskList: ToDoListComponent;


  task: Task[];

  name;
  items = [];

  description;
  items2 = [];

  ngOnInit(): void {
    this.taskList.tasks = [
      {
        id: 1,
        name: 'Akawit',
        description: 'Nasoke',
      },
      {
        id: 2,
        name: 'Kim',
        description: 'Zun',
      },
      {
        id: 3,
        name: 'Nam',
        description: 'Fha',
      },
    ];
  }
  addclick() {
      
    // if (this.name == '') {
    // } else {
    //   this.items.push(this.name);
    //   this.name = '';
    // }

    // if (this.description == '') {
    // } else {
    //   this.items2.push(this.description);
    //   this.description = '';
    // }
    console.log('test');
  }

  constructor() {}
}
