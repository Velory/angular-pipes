import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <div class="col-xs-8 col-xs-offset-2">
    <h3 style="color: blue">Создание динамического фильтра</h3>
    <h4>{{ asyncTitle | async }}</h4>
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn btn-primary" (click)="addCar()">Добавить</button>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index">
        <b>{{ i + 1 }}</b> {{ car.name }} <i>{{ car.descr }}</i>
      </li>
    </ul>

    <hr>
    <h3 style="color: blue">Создание своего пайпа</h3>
    <h4>{{ num }}</h4>
    <h4>{{ num | appPow:3 }}</h4>
    <h4>{{ num | appPow:6 }}</h4>
    <h4>{{ num | appPow }}</h4>
    <h4>{{ 6 | appPow:2 }}</h4>
    <h4>{{ num | appPow:3:'=' }}</h4>

    <hr>
    <h3 style="color: blue">Стандартные пайпы</h3>
    <h4>{{ name }}</h4>
    <h4>{{ name | lowercase }}</h4>
    <h4>{{ name | uppercase }}</h4>
    <h4>{{ name | slice:0:3 }}</h4>
    <h4>{{ name | slice:3:6 | uppercase }}</h4>
    <hr>
    <h4>{{ pi }}</h4>
    <h4>{{ pi | number }}</h4>
    <h4>{{ pi | number:'1.3-4' }}</h4>
    <h4>{{ pi | number:'2.2-2' }}</h4>
    <hr>
    <h4>{{ money }}</h4>
    <h4>{{ money | currency }}</h4>
    <h4>{{ money | currency:'UAH':'code' }}</h4>
    <h4>{{ money | currency:'UAH':'symbol-narrow' }}</h4>
    <h4>{{ money | currency:'EUR':'symbol':'4.2-2' }}</h4>
    <h4>{{ money | currency:'EUR':false }}</h4>
    <hr>
    <h4>{{ date }}</h4>
    <h4>{{ date | date }}</h4>
    <h4>{{ date | date:'fullDate' }}</h4>
    <h4>{{ date | date:'shortDate' }}</h4>
    <h4>{{ date | date:'shortTime' }}</h4>
    <hr>
    <h4>{{ amount }}</h4>
    <h4>{{ amount | percent}}</h4>
    <hr>
    <h4>{{ object }}</h4>
    <h4>{{ object | json }}</h4>
    <h4><pre>{{ object | json }}</pre></h4>

  </div>
  `,
})

export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: 
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

  num = 2;

  cars = [
    {name: 'Ford', descr: 'descr 1'},
    {name: 'Mazda', descr: 'descr 2'},
    {name: 'Bently', descr: 'descr 3'},
    {name: 'Audi', descr: 'descr 4'},
    {name: 'Mercedes', descr: 'descr 5'},
    {name: 'BMW', descr: 'descr 6'}
  ];
  searchCar = '';

  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));

  addCar() {
    this.cars.push({
      name: 'New car',
      descr: 'nw desc'
    });
  }
}
