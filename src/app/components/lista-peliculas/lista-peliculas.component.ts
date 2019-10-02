import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.scss'],
})
export class ListaPeliculasComponent implements OnInit {

  

  constructor(private pelisService: PeliculasService) {}

  ngOnInit() {}

}
