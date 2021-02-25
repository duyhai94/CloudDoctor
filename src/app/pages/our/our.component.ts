import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss'],
})
export class OurComponent implements OnInit {
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
