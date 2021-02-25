import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
    const type = localStorage.getItem('language');
    translate.use(type);
  }

  ngOnInit(): void {
    const type = localStorage.getItem('language');
    this.translate.use(type);
  }
}
