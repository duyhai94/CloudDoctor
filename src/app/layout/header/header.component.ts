import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  select: boolean = true;
  typeLang = 'en';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'vi']);
    this.translate.use(this.typeLang);
  }

  ngOnInit(): void {}

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
    } else {
      this.translate.use('en');
      this.typeLang = 'en';
    }
  }
}
