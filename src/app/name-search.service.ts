
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class NameSearchService {
  searchEndPoint:string = 'https://api.nationalize.io/?name'
  private http:HttpClient;

  constructor(http2:HttpClient) { 
    this.http = http2;
  
  }

  getDetails(name:string):Observable<Country>{
      return this.http.get<Country>(`${this.searchEndPoint+'='+name}`);
  }
}