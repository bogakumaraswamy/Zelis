import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {

  constructor(private http: HttpClient) { }

  getdat() {
    return this.http.get('assets/JSON/usermenu.json')
  }

}
