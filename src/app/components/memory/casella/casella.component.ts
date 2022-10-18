import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casella',
  templateUrl: './casella.component.html',
  styleUrls: ['./casella.component.scss']
})
export class CasellaComponent implements OnInit {
  @Input() item!: {image: string, visible: boolean};
  @Input() loaded: boolean = false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

  clicked() {
    console.log(this.item)
  }

}
