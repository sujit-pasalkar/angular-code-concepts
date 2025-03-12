import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Custom1Directive } from '../../sharedModule/common/directives/custom1.directive';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, Custom1Directive],
  // directives:[Custom1Directive],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  expression: string = '';
  output: string = '';
  show = false;
  source = [1,2,3,4]

  constructor() { }
  showCalc() {
    this.show = !this.show;
  }



}
