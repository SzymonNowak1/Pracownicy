import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../auth/model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private http: HttpClient, private api: ApiService, private authenticationService: AuthenticationService ) { }

  admin = false;
  manager = false;
  user = false;

  userObject: User;

  ngOnInit(): void {

    this.userObject = this.authenticationService.currentUserValue;
    let roles = this.userObject.roles;
    if ( roles.includes('ADMIN') ) this.admin = true;
    if ( roles.includes('MANAGER') ) this.manager = true;
    if ( roles.includes('USER') ) this.user = true;
  }

  logout() {
    this.authenticationService.logout(); 
    location.reload();
  }
  openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
    
  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.body.style.backgroundColor = "white";
  }



}
