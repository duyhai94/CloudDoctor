import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    localStorage.setItem('language', 'en');
  }
  title = 'CloudDoctor';
  select: number = 1;
  activeLink(id: number) {
    this.select = id;
    console.log(this.select);
  }
}
