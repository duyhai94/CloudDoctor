import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public translate: TranslateService, private route: Router) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
    const type = localStorage.getItem('language');
    translate.use(type);
  }

  ngOnInit() {
    const type = localStorage.getItem('language');
    if (type) {
      localStorage.setItem('language', 'en');
      this.translate.use('en');
    }
    this.translate.use(type);
    if (window.location.href.split('/')[4] === '') {
      return this.route.navigateByUrl('/home');
    }
  }
}
