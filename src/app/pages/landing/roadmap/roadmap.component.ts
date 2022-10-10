import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
