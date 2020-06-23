import { Injectable } from '@angular/core';

//Client
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Model
import { Article } from '../Models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  restUrl = "http://localhost:8000";
  apiUrl = "/api/Article/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor( private http: HttpClient ) { }

  getListArticles(): Observable<Article[]>{
    return this.http.get<Article[]>( this.restUrl+this.apiUrl );
  }

  deleteArticle( id: number ): Observable<Article>{
    return this.http.delete<Article>( this.restUrl+this.apiUrl+id )
  }

  createArticle( article: Article ): Observable<Article>{
    return this.http.post<Article>(this.restUrl+this.apiUrl, article, this.httpOptions);
  }
}
