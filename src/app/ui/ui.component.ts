import { Component, OnInit } from '@angular/core';
import { betaOne, betaZero, computeY } from '../linear-regression/linear-regression';
import { get_R2 } from '../coeficiente_r/get_R2';
import { get_Rxy } from '../coeficiente_r/get_Rxy';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  array1: String = "";
  array2: String = "";
  xValue: number | null = null;
  beta1: number | null = null;
  beta0: number | null = null;
  yResult: number | null = null;
  r: number | null = null;
  r2: number | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  LinearRegression(){
    const array1: number[] = this.array1.split(",").map(number => {return parseFloat(number)});
    const array2: number[] = this.array2.split(",").map(number => {return parseFloat(number)})
    this.beta1 = betaOne(array1, array2);
    this.beta0 = betaZero(array1, array2, this.beta1);
  }

  computeY() {
    if(this.beta1 && this.beta0 && this.xValue) {
      this.yResult = computeY(this.beta1, this.beta0, this.xValue)
    }
  }

  CorrelationCoefficients() {
    const array1: number[] = this.array1.split(",").map(number => {return parseFloat(number)});
    const array2: number[] = this.array2.split(",").map(number => {return parseFloat(number)})
    this.r = get_Rxy(array1, array2);
    this.r2 = get_R2(array1, array2);
  }

}
