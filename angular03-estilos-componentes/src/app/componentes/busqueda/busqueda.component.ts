import { Component, OnInit } from '@angular/core';
import { Busqueda } from '../../interfaces/busqueda';
import { BusquedaService } from 'src/app/servicios/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent implements OnInit{
  //si existe te da la busqueda sino null
  resultado!: Busqueda | null;
  txtBusqueda!: string; 

  constructor ( private srvBusqueda: BusquedaService){

  }

  ngOnInit(): void {
    //this.srvBusqueda.busqueda().then(
    //(response) =>{
    //  this.resultado = response;
    //}, (error) => {
    //  alert("Error " + error.statuText);
    //}
    //)   
  }

  busqueda = () => {
    this.srvBusqueda.busqueda(this.txtBusqueda).then(
      (response) => {
        //alert("Numero total de elementos " + response.total_count);
        this.resultado = response;
      },
      (error) => {
        alert("Error " + error.statusText);
      }
    );
  }
  
}
