import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseurl = 'http://localhost:8081/equipe';
  constructor(private http:HttpClient) { }
addEquipe(equipe?: Equipe): Observable<Object>{
  return this.http.post<Object>(`${this.baseurl}`, equipe) ;
}
}
