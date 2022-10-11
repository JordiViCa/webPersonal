import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  i = 0
  textToAnimate = "Hello, and welcome to my page.";
  textShowTitle = "";
  constructor() { }

  ngOnInit(): void {
    this.typeWriter()
  }

  
  typeWriter() {
    if (this.i < this.textToAnimate.length) {
      this.textShowTitle += this.textToAnimate[this.i];
      this.i++;
      setTimeout(()=> {
        this.typeWriter()
      }, 100);
    }
  }
}
