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

  @Output()
  OnSelected: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select() {
    this.OnSelected.emit(this.task);
  }
}
