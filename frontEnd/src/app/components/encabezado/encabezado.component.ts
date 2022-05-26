import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosporfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDatos().subscribe(data=>{
      console.log("Datos personales " + JSON.stringify(data));
      this.miPorfolio=data[0];
    });
  }

}