import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private key = '4be7ddb358611abf7f8f157225f8b54a';
  listaPelis: any[] = [];
  constructor(private http: HttpClient) {
  }

// Devuelve las peliculas que no son de accion ordenadas por el beneficio generado en taquilla
  getList() {
    let query = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&language=es-ES&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&primary_release_year=2018&without_genres=28`;
    this.http.get(query).subscribe( (data: any) => {
      this.listaPelis = data.results;
    } );
    return this.listaPelis;
  }

}
