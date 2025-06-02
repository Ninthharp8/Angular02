import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../servicios/pokemon.service'
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

   name : string = ''
   urlImage: string= ''

  constructor(private pokemonService : PokemonService,private primengConfig: PrimeNGConfig){}
  

  ngOnInit(): void{

    this.primengConfig.ripple = true;

  }

  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default
    })

  }
}
