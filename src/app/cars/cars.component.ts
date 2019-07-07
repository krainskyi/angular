import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',

  styleUrls: ['./cars.component.css'],


})
export class CarsComponent implements OnInit {
  public cars: any = [];
  
  public car = { brand: '', price: '', year: '', used: false };
  constructor() { }
  ngOnInit() {
  }
  public getBackgroundColor(price,  used) {
    let result = 'none';
    if(price<12000){
      return 'green';
    }
    if(price>12000 && price< 25000){
      return 'yellow';
    }
    if(price>25000 ){
      return 'red';
    }
    if(!used == false){
      return alert('as');
    }
   
    return result;
  
  }
  deleteCar(index){
    this.cars.splice(index, 1)
  };

  public addCar(newCar) {
    const item = {brand: newCar.brand, price: newCar.price, year: newCar.year, used: newCar.used};
    this.cars.push(item);
    if (!newCar.used == false) {
      newCar.year = '2019';
    }
    
    
    
    console.log(newCar);
  }
  
}


 
