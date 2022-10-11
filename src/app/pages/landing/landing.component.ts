import { Component,OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('myname') el: any; 
  
  constructor() { }

  structure = [{name: 'Who am I', value: 'who_am_i'}, {name: 'Roadmap', value: 'roadmap'}, {name: 'Contact', value: 'contact'}];
  langSelected: string = "";
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.el);
  }
  setLang(value: string) {
    this.langSelected = value;
  }

}
