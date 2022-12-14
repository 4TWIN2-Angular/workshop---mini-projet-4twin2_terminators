import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../models/equipe';
import { Etudiant } from '../models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public baseurl = 'http://localhost:8081/equipe';
  etudUrl="http://localhost:9091/etud";
  
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  httpOptions = {
    headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  }
  constructor(private _http:HttpClient) { }
addEquipe(equipe?: Equipe): Observable<Object>{
  return this._http.post<Object>(`${this.baseurl}`, equipe) ;
}
/*Entité Etudiant CRUD */
addEtudiant(etudiant:Etudiant){
  console.log("Test Service");
 return  this._http.post<Object>(this.etudUrl+'/add',etudiant,this.httpOptions);

}public GetAllEtudiants(): Observable<Etudiant[]> {
  return this._http.get<Etudiant[]>(this.etudUrl+'/all',this.httpOptions);
}
deleteEtudiant(etudiant:Etudiant):Observable<Etudiant>{
  console.log("delete etudiant");
  return this._http.delete<Etudiant>( this.etudUrl+'/delete/'+etudiant.id,this.httpOptions) }
updateEtudiant(etudiant:Etudiant):Observable<Etudiant>{

    return this._http.put<Etudiant>(this.etudUrl+'/edit',etudiant,this.httpOptions);
    console.log("update etudiant")
  }
  getEtudiant(id:number):Observable<Etudiant>{

    return this._http.get<Etudiant>(this.etudUrl+"/"+id,this.httpOptions);
    console.log("get etudiant");
  }


}
