import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent {
  //create an array of Salesperson
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Rounak', 'Das', 'rounak@gmail.fr', 1000),
    new SalesPerson('Rounak', 'Das', 'rounak@gmail.fr', 5000),
    new SalesPerson('Rounak', 'Das', 'rounak@gmail.fr', 2050),
    new SalesPerson('Rounak', 'Das', 'rounak@gmail.fr', 1950),
  ];
}
