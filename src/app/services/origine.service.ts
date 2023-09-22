import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './api.url.config';
import { CurrentUser, User } from '../models/User';
import { AccountService } from './account.service';
import { Registerrequest } from './registerrequest';
import { Process } from '../models/Process';
import { Origine } from '../models/Origine';

@Injectable({
  providedIn: 'root'
})
export class OrigineService {
  private url = "http://localhost:8080/api/origin";
 
  constructor(private http: HttpClient) { }

  findoriginById(id: any): Observable<Origine> {
    return this.http.get<Origine>(this.url + `/${id}`);
  }

 
}
