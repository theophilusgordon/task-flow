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
  taskContainers: TaskContainer[] = [
    {
      id: 'todo',
      title: 'To Do',
      counter: 2,
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      counter: 1,
    },
    {
      id: 'completed',
      title: 'Completed',
      counter: 9,
    },
  ];

  
  tasks:Task[] =[
    {
      title: 'Task 1',
      complexity: 'High',
      decriptions: 'Task 1 description',
      date: '2020-12-12',
      status: 'todo'
    },
    {
      title: 'Task 2',
      complexity: 'Low',
      decriptions: 'Task 2 description',
      date: '2020-12-12',
      status: 'in-progress'
    },
    {
      title: 'Task 3',
      complexity: 'Medium',
      decriptions: 'Task 3 description',
      date: '2020-12-12',
      status: 'completed',
    },
    {
      title: 'Task 4',
      complexity: 'Medium',
      decriptions: 'Task 4 description',
      date: '2020-12-12',
      status: 'todo'
    }
];

}

type TaskContainer = {
	id: string;
	title: string;
	counter: number;
}

interface Task {
  title: string,
  complexity: string,
  decriptions: string,
  date: string,
  status: 'todo' | 'in-progress' | 'completed'
}