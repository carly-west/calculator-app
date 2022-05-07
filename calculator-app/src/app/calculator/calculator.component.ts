import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

// Implements the calculator. Takes user input and prints calculation based on input
export class CalculatorComponent implements OnInit {

  numbers: Number[] = [];
  equation: any[] = [];
  display: number = 0;
  total: number = 0;
  hasBeenClicked: boolean = false;

  firstNumber: any = 0;
  secondNumber: any = 0;
  mathOperator: any = "";
  totalOfMath: any = "";


  constructor() { }

  ngOnInit(): void {
  }
  


  firstInput(event: any) {
    this.firstNumber = event.target.value;

  }

  secondInput(event: any) {
    this.secondNumber = event.target.value;

  }

  selectedIndex = -1;

  setSelected(id: number) {
    this.selectedIndex = id;
  }

  onClickEquals(event: any) {

    if (this.mathOperator == "") {
      this.totalOfMath = "Please select math operation!";
    }

    if (this.mathOperator == "+") {
      this.totalOfMath = parseFloat(this.firstNumber) + parseFloat(this.secondNumber);
    }
    if (this.mathOperator == "-") {
      this.totalOfMath = parseFloat(this.firstNumber) - parseFloat(this.secondNumber);
    }
    if (this.mathOperator == "/") {
      this.totalOfMath = parseFloat(this.firstNumber) / parseFloat(this.secondNumber);
    }
    if (this.mathOperator == "X") {
      this.totalOfMath = parseFloat(this.firstNumber) * parseFloat(this.secondNumber);
    }
    if (this.firstNumber == 0 || this.secondNumber == 0){
      this.totalOfMath = "Please input numbers!";
    }


  }

  onClickOperator(event: any) {
    this.mathOperator = event.target.value;
  }



  onClickCalcButton(num: any) {
    console.log(this.equation)
    this.numbers.push(num);
    this.display = parseFloat(this.numbers.join(""));
    this.hasBeenClicked = true;
  }



  onClickMathButton(num: any){

    if (this.hasBeenClicked == true) {

      this.equation.push(this.numbers.join(""));
      this.numbers.length = 0;
      this.total = 0;
      if (num == "+") {
        for (var i = 0; i < this.equation.length; i++){
          this.total += parseFloat(this.equation[i]);
        }
      }

      if (num == "-") {
        for (var i = 0; i < this.equation.length; i++){
          console.log(this.total)
          console.log(this.equation[i])


          this.total = parseFloat(this.equation[i]) - this.total;
        }
      }

      this.display = this.total;
      this.hasBeenClicked = false;
    }

  }
}



