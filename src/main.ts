import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
  <h3>Input A:</h3>
  <input #inputA (input)="onInputAChange($event)">
  <h3>Input B:</h3>
  <input #inputB (input)="onInputBChange($event)">
  <br><br>
  <h3 *ngIf="result !== 0">Result: {{result}}</h3>
</div>
  `,
})
export class App {
  inputA: number = 0;
  inputB: number = 0;

  get result(): number {
    return this.inputA + this.inputB;
  }

  onInputAChange(event: Event) {
    this.inputA = parseFloat((event.target as HTMLInputElement).value) || 0;
  }

  onInputBChange(event: Event) {
    this.inputB = parseFloat((event.target as HTMLInputElement).value) || 0;
  } 

}

bootstrapApplication(App);
