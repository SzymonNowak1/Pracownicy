import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  isLogged = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    if ( this.authService.currentUserValue ) {
      this.isLogged = true;
    }
  }

}
