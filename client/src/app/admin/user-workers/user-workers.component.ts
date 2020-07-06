import { Component, OnInit } from '@angular/core';
import { ENDPOINTS, ApiService } from 'src/app/auth/http/api.service';
import { Page, UserWorker } from 'src/app/model/models';

@Component({
  selector: 'app-user-workers',
  templateUrl: './user-workers.component.html',
  styleUrls: ['./user-workers.component.css']
})
export class UserWorkersComponent implements OnInit {
  constructor( private api: ApiService) { }

  userworkers: UserWorker[];

  ngOnInit(): void {
    this.api.get<Page<UserWorker>>(ENDPOINTS.API_USERWORKERS, { perPage: 10, page: 0} ).subscribe( response => {
      console.log( response );
      this.userworkers = response.elements;      
    });
  }

  open(){
    var element = document.getElementById("sForm")
    element.classList.toggle("open");
  }
  
  close(){
    var element = document.getElementById("sForm")
    element.classList.remove("open");
  }
  settingsOpen() {
    document.getElementById("yes").style.display = "block";
  }
}
