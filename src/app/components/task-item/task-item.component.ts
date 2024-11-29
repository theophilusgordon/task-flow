import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Complexity } from '../tasks-container/tasks-container.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  Complexity = Complexity;
@Input() tasks: Task[] = [];
  // tasks:Task[] =[
  //     {
  //       title: 'Task 1',
  //       complexity: 'High',
  //       decriptions: 'Task 1 description',
  //       date: '2020-12-12',
  //       status: 'todo'
  //     },
  //     {
  //       title: 'Task 2',
  //       complexity: 'Low',
  //       decriptions: 'Task 2 description',
  //       date: '2020-12-12',
  //       status: 'in-progress'
  //     },
  //     {
  //       title: 'Task 3',
  //       complexity: 'Medium',
  //       decriptions: 'Task 3 description',
  //       date: '2020-12-12',
  //       status: 'completed',
  //     },
  //     {
  //       title: 'Task 4',
  //       complexity: 'Medium',
  //       decriptions: 'Task 4 description',
  //       date: '2020-12-12',
  //       status: 'todo'
  //     }
  // ];

  ngOnInit(): void {
    console.log(this.tasks);
  }


}


interface Task {
  title: string,
  complexity: string,
  decriptions: string,
  date: string,
  status: 'todo' | 'in-progress' | 'completed'
}