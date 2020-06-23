import { Injectable } from '@angular/core';

//Client
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

//Model

import { Area } from '../Models/Area';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  restUrl = "http://localhost:8000"
  apiUrl = "/api/Area/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  getListAreas(): Observable<Area[]>{
    return this.http.get<Area[]>( this.restUrl+this.apiUrl );
  }

  deleteArea( id: number ): Observable<Area>{
    return this.http.delete<Area>( this.restUrl+this.apiUrl+id )
  }

  createArea( area: Area ): Observable<Area>{
    return this.http.post<Area>(this.restUrl+this.apiUrl, area, this.httpOptions);
  }

  seeArea( id: number ): Observable<Area>{
    return this.http.get<Area>( this.restUrl+this.apiUrl+id );
  }
}
