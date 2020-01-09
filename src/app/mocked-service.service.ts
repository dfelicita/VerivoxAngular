import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockedServiceService {

  constructor(private http: HttpClient) { }

  getData(){
   return this.http.get<Config>('../assets/data.json'); 
  }

}

export interface Config {
  totalResults: number;
  offers: Array<any>;
}