import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  structure = [{name: 'Who am I', value: 'who_am_i'}, {name: 'Roadmap', value: 'roadmap'}, {name: 'Contact', value: 'contact'}];
  textToAnimate = "Hello, and welcome to my page.";
  textShowTitle = "";
  i = 0;
  ngOnInit(): void {
    this.typeWriter()
  }
  typeWriter() {
    if (this.i < this.textToAnimate.length) {
      this.textShowTitle += this.textToAnimate[this.i];
      this.i++;
      setTimeout(()=> {
        this.typeWriter()
      }, 50);
    }
  }

}
