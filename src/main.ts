import 'zone.js/dist/zone';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

export class SomeServiceToInject {
  public name = 'bez @Injeect';
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  providers: [SomeServiceToInject],
  template: `
    <h1>Hello from {{name}}!</h1>
  `,
})
export class App {
  name = inject(SomeServiceToInject).name;
}

bootstrapApplication(App);
