import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  select: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showMenu(){
    this.select = !this.select;
    console.log(this.select);
    
  }
}
