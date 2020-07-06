import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from '../auth/http/api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor( private api: ApiService) { }


  ngOnInit(): void {

  }


}

