import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  todos = [
    {
      brand: 'Toyota',
      new: false,
      used: true,
      year: 2014,
      price: 15000
    }
    ];
  constructor() { }

  ngOnInit() {

  }
  addTodo(newTodoBrand) {
    let newTodo = {
      brand: newTodoBrand,
      new: newTodoBrand,
      used: newTodoBrand,
      year: newTodoBrand,
      price: newTodoBrand
    };
    this.todos.push(newTodo);
    
  }
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}
