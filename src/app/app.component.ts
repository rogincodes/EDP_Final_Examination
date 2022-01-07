import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public no1!:number;
  public no2!:number;
  public result!:number;

  allClear() {
    this.no1 = Number({});
    this.no2 = Number({});
    this.result = Number({});
  }

  add() {
    this.result = this.no1+this.no2;
  }

  subtract() {
    this.result = this.no1-this.no2;
  }
  
  multiply() {
    this.result = this.no1*this.no2;
  }

  divide() {
    this.result = this.no1/this.no2;
  }

}
