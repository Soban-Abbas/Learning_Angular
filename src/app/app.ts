import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day1 } from './day1/day1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Day1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning_angular');
}
