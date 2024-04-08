import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent {
  constructor(private _route: Router) {}

  onBack() {
    this._route.navigate(['route']);
  }
}
