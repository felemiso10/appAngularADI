import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from './../../../interfaces/task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  //comunicacion entre componentes
  //Padre-Hijo
  @Input() task: Task;
  @Input() index: number;
  
  //Hijo-Padre
  @Output() remove = new EventEmitter<number>();
  @Output() complete = new EventEmitter<number>();


  constructor() {}

  ngOnInit(): void {

  }

  taskCheckedEvent(){
    this.complete.emit(this.index);
  }

  removeEvent(){
    this.remove.emit(this.index)
  }

}