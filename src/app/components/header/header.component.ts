import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() items!: any[];
  languages = [
    {name: 'EN', value: 'en'},
    {name: 'ES', value: 'es'},
    {name: 'CA', value: 'ca'},
    {name: 'PT', value: 'pt'},
    {name: 'FR', value: 'fr'}
  ];
  langSelected = '';
  langSelector = '';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let lang = navigator.language;
    let el = this.languages.filter((el) => lang.includes(el.value)??el)[0];
    if (el != undefined) {
      this.langSelected = el.value;
    } else {
      this.langSelected = this.languages[0].value;
    }
    this.selectLang(this.langSelected);
  }

  selectLang(lang: string) {
    this.document.documentElement.lang = this.langSelected;
  }
  log(a: any) {
    console.log(a)
  }

}
