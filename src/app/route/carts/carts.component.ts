import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent {
  constructor(private _route: Router) {}

  onBack() {
    this._route.navigate(['route']);
  }
}
