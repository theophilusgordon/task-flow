import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { TasksContainerComponent } from "./components/tasks-container/tasks-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, TasksContainerComponent]
})
export class AppComponent {
  title = 'task-flow';
}
