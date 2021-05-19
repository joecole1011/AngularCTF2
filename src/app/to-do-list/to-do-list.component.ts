import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Task } from './task';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  title = 'ToDoItemComponent';
  // @ViewChildren(TaskItemComponent)
  // taskIteam : QueryList<TaskItemComponent>

  @ViewChildren(ToDoItemComponent)
  taskItems: QueryList<ToDoItemComponent>;

  tasks: Task[];

  constructor() {
    this.tasks = [];
  }
  ngOnInit() {}
  selectedTask(taskComponent: ToDoItemComponent) {
    alert(`Task ${taskComponent.task.name} selected`);
    this.taskItems.forEach((p) => {
      p.isSelected = false;
    });
    taskComponent.isSelected = true;
  }
  deleteTask(deleteTaskComponent:ToDoItemComponent ){
    
  }
}
