import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeansService {
  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
  private url = this.baseUrl + 'api/beans'; // change 'todos' to your API path
  constructor() { }
}
