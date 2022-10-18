import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tauler',
  templateUrl: './tauler.component.html',
  styleUrls: ['./tauler.component.scss']
})
export class TaulerComponent implements OnInit {
  constructor() { }
  @Input() matrix: any;
  elementsClicked: number[][]= []
  @Input() loaded: boolean = false;
  @Output() sendClick = new EventEmitter<Number>();
  @Output() victoria = new EventEmitter<Boolean>();
  x = [...Array(4).keys()]
  y = [...Array(6).keys()]
  matrixCopy = [];
  
  ngOnInit(): void {
  }

  clicked(vary: number,varx: number) {
    if (this.matrix != this.matrixCopy) {
      this.elementsClicked = [];
      this.matrixCopy = this.matrix;
    }
    if (this.elementsClicked.length < 2 && !this.matrix[vary][varx].visible) {
      this.elementsClicked.push([vary,varx])
      this.matrix[vary][varx]["visible"] = true
      console.log(vary,varx)
      if (this.elementsClicked.length == 2) {
        this.checkClicked()
      } else {
        this.sendClick.emit(0);
      }
    }
  }
  checkClicked() {
    let el1y = this.elementsClicked[0][0];
    let el1x = this.elementsClicked[0][1];
    let el2y = this.elementsClicked[1][0];
    let el2x = this.elementsClicked[1][1];
    this.matrix
    if (this.matrix[el1y][el1x].image == this.matrix[el2y][el2x].image) {
      console.log("Match")
      this.checkVictory()
      this.elementsClicked = []
      this.sendClick.emit(1);
    } else {
      this.sendClick.emit(0);
      console.log("Dismatch")
      setTimeout(() => {
        this.matrix[el1y][el1x]["visible"] = false;
        this.matrix[el2y][el2x]["visible"] = false;
        this.elementsClicked = []
      }, 1000)
    }
  }
  checkVictory() {
    let victory = true
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (!this.matrix[i][j].visible) {
          victory = false
        }
      }
    }
    if (victory) {
      this.victoria.emit(true);
    }
  }
}
