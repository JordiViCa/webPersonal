import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() items: any[] = [];
  @Output() emitLang = new EventEmitter<string>();
  langSelected: string = "";
  languages = [
    {name: 'EN', value: 'en'},
    {name: 'ES', value: 'es'},
    {name: 'CA', value: 'ca'},
    {name: 'PT', value: 'pt'},
    {name: 'FR', value: 'fr'}
  ];
  langSelector = '';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let lang = navigator.language;
    let el = this.languages.filter((el) => lang.includes(el.value)??el)[0];
    if (el != undefined) {
      this.langSelected = el.value;
      lang = el.value;
    } else {
      lang = this.languages[0].value;
      this.langSelected = this.languages[0].value;
    }
    this.selectLang(lang)
  }

  selectLang(lang: string) {
    this.document.documentElement.lang = this.langSelected;
    this.emitLang.emit(lang);
  }
  log(a: any) {
    console.log(a)
  }

}
