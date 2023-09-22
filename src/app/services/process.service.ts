import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './api.url.config';
import { CurrentUser, User } from '../models/User';
import { AccountService } from './account.service';
import { Registerrequest } from './registerrequest';
import { Process } from '../models/Process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private url = "http://localhost:8080/api/process";
 
  constructor(private http: HttpClient, private user: AccountService) { }

  getAllProcesss(): Observable<any> {
    return this.http.get(this.url + '/processes');
  }

  addProcess(process: Process): Observable<Process> {
    return this.http.post<Process>(this.url + '/process/addition', process);
  }


  editUser(id: any, process: Process): Observable<Process> {
  
    return this.http.put<Process>(`${this.url}/process/update/${id}`, process);
  }

  deleteUser(id: any): Observable<Process> {
    return this.http.delete<Process>(this.url + `/process/delete/${id}`);
  }
  findProcessById(id: any): Observable<Process> {
    return this.http.get<Process>(this.url + `/${id}`);
  }
  getOrigineNameForProcess(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/processes/${id}`);
  }

  getLocationNameForProcess(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/processel/${id}`);
  }
  getSousSecteurNameForProcess(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/processesecteur/${id}`);
  }
  searchByName(name: string): Observable<any> {
    return this.http.get(`${this.url}/search`, { params: { name } });
  }
  
 
}
