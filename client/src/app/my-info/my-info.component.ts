import { Component, OnInit } from '@angular/core';
import { ENDPOINTS, ApiService } from '../auth/http/api.service';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.css']
})
export class MyInfoComponent implements OnInit {

  constructor(private api: ApiService) { }

  user: [];

  ngOnInit(): void {  
  let name = window.localStorage.getItem("username");

  this.api.get<any>(ENDPOINTS.API_USERWORKERS, { name } ).subscribe( response => {
    console.log( response );
    this.user = response.elements;      
  });

  }
}
