import { Component, OnInit } from '@angular/core';
import { MockedServiceService, Config } from './mocked-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'verivox-app';
  serviceList: Array<any>;
  loading: boolean;

  constructor(private service: MockedServiceService) { }

  ngOnInit(){
    this.loading = true;
    this.service.getData().subscribe(data => {
      this.renderList(data.offers);
    });
  }

  renderList(data: Array<any>){
    this.serviceList = data;
    this.loading = false;
  }

}
