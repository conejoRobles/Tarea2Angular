import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = '96905173'
  url: string = `http://www.omdbapi.com/?apikey=${this.apiKey}&`

  constructor(private http: HttpClient) {
  }

  getMovies(title: string, year: number):Observable<any>{
    return this.http.get<any>(`${this.url}s=${title}&y=${year}`)
  }
  getDetails(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}i=${id}`)
  }
}
