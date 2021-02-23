import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    if(window.location.href.split('/')[3]==='') return this.route.navigateByUrl('/home');
  }

}
