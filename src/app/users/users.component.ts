import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loggedUser : string;
  constructor(private authService : AuthService,private router : Router) { }

  ngOnInit(): void {
  this.loggedUser = localStorage.getItem("USERNAME");
  }

  //logout
  logOut()
  {
    this.authService.logOut();
    this.router.navigateByUrl('signin');
  }

    //insert employee
    insertPlan()
    {
      this.router.navigate(['travelplan']);
    }

}
