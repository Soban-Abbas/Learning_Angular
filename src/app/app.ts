import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day1 } from './day1/day1';
import { Day2 } from "./day2/day2";
import { ReactiveForm } from "./reactive-form/reactive-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Day1, Day2, ReactiveForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning_angular');
}
