import { Component } from '@angular/core';
import { TaskContainerComponent } from "./task-container/task-container.component";

@Component({
  selector: 'app-tasks-container',
  standalone: true,
  imports: [TaskContainerComponent],
  templateUrl: './tasks-container.component.html',
  styleUrl: './tasks-container.component.css',
})
export class TasksContainerComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'To Do',
      counter: 2,
    },
    {
      id: 2,
      title: 'In Progress',
      counter: 1,
    },
    {
      id: 3,
      title: 'Completed',
      counter: 9,
    },
  ];
}

type Task = {
	id: number;
	title: string;
	counter: number;
}
