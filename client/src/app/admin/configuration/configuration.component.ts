import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINTS } from 'src/app/auth/http/api.service';
import { Configuration, Page } from 'src/app/model/models';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor( private api: ApiService) { }

  configurations: Configuration[];

  ngOnInit(): void {
    this.api.get<Page<Configuration>>(ENDPOINTS.API_CONFIGURATION, { perPage: 10, page: 0} ).subscribe( response => {
      console.log( response );
      this.configurations = response.elements;
    });
  }

  settingsOpen(){}

  open() {}
}
