import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  public cars: any = [];
  public car = {brand:'', price: '', year:'', used:false};
  constructor() { }

  ngOnInit() {
  }

  addCar(newCar){
    this.cars.push(newCar);
    console.log(newCar);
  }  
  
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // addHero(newHero: string) {
  //   if (newHero) {
  //     this.heroes.push(newHero);
  //   }
  // }
  
}




