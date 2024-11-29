import { Component, Input } from '@angular/core';
import { TaskItemComponent } from "../../task-item/task-item.component";

@Component({
  selector: 'app-task-container',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-container.component.html',
  styleUrl: './task-container.component.css'
})
export class TaskContainerComponent {
	@Input() title: string = '';
  @Input() id: string = '';
	@Input() counter: number = 0;
  @Input() tasks: Task[] = [];
  
  getTaskStatus(status: string) {
     return this.tasks.filter(task => task.status === status);
  }

  ngOnInit(): void {
    console.log('h',
       this.tasks, this.id);
  }

}
interface Task {
  title: string,
  complexity: string,
  decriptions: string,
  date: string,
  status: 'todo' | 'in-progress' | 'completed'
}