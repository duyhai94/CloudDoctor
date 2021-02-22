import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  select: boolean = true;
  lang: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  showMenu(){
    this.select = false;
    console.log(this.select);
    
  }
  closeMenu() {
    this.select = true;
  }
  changeLang(){
    this.lang = !this.lang
  }
}
