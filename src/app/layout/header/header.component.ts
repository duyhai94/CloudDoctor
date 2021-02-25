import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  select: boolean = true;
  typeLang = 'en';

  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'vi']);
    this.translate.use(this.typeLang);
  }

  ngOnInit(): void {
    this.typeLang = localStorage.getItem('language');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  showMenu() {
    this.select = false;
  }
  closeMenu() {
    this.select = true;
  }

  changeLang() {
    if (this.typeLang === 'en') {
      this.translate.use('vi');
      this.typeLang = 'vi';
      localStorage.setItem('language', 'vi');
    } else {
      this.translate.use('en');
      this.typeLang = 'en';
      localStorage.setItem('language', 'en');
    }
  }
}
