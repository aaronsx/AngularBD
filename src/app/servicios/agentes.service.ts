import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgentesService {
  ruta="https://reqres.in/api/users";
  constructor(private http:HttpClient) { }
  
  get():Observable<any>{
    return this.http.get("https://reqres.in/api/users");
  }

  getAgenteById(id:number):Observable<any>{
    //el `` se utiliza para poner el ${} this.http.get(`${this.ruta}users/${id}`
    // si se pone "" tendrias que poner {{}}
    //this.http.get("{{ruta}}users/{{id}}"); o
    return this.http.get(this.ruta + "/"+id);
  }
}
