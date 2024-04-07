import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app/route/route-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Routing In {{name}}!</h1>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync(), provideRouter(routes)],
});

// function provideRouter(routes: any): import("@angular/core").Provider|import("@angular/core").EnvironmentProviders {
// throw new Error('Function not implemented.');
// }
