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
	@Input() counter: number = 0;
}
