import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toDate: Date = new Date();
  title: string = 'Angular pipes Example';
  num: number = 9542.14554;
  Fahrenheit: any;
}
