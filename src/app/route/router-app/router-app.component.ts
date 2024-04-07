import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-router-app',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './router-app.component.html',
  styleUrl: './router-app.component.css',
})
export class RouterAppComponent {
  constructor(private _route: Router) {}

  goToOrder() {
    this._route.navigate(['orders']);
  }
}
