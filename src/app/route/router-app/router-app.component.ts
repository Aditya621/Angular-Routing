import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { DataServiceService } from '../data-service.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-router-app',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatSnackBarModule],
  templateUrl: './router-app.component.html',
  styleUrl: './router-app.component.css',
  providers:[DataServiceService]
})
export class RouterAppComponent {
  constructor(private _notify: MatSnackBar, private _route: Router, private _fetchdata: DataServiceService) {}

  public items:any;
  goToOrder() {
    this._route.navigate(['orders']);
  }

  public getData(){

    this._fetchdata.data().subscribe({
      next: (res) =>{
        this._notify.open('Data Load Successfully', 'Ok')
        this.items = res;
        console.log(res);
      } ,
      error: (err)=>{
        console.log(err);
      }
    })

  }
}
