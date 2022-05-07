import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})

// Implements the tipping calculator. Takes user input and prints calculation based on input

export class TippingComponent implements OnInit {


  tip: number = 0;
  price: number = 0;
  total: number = 0;

  selectedIndex = -1;

  constructor() { }

  ngOnInit(): void {
  }
  setSelected(id: number) {
    this.selectedIndex = id;
  }



  setTip(event: any){
    this.tip = +event.target.value;
    console.log(this.tip);
  }

  setPrice(event: any){
    this.price = +event.target.value;
    console.log(this.price);
  }

  onClickCalc(event: any){
    this.total = this.price * this.tip;
  }

}
