import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { graficos } from 'src/app/model/graficos.model';
import { GraficosService } from 'src/app/servicios/graficos.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {


  public graficos:graficos[] = [];
  public editGraficos:graficos | undefined;
  public deleteGraficos:graficos | undefined;

  constructor(private graficosService: GraficosService){}

  ngOnInit(): void {
    this.getGraficos();
  }

  public getGraficos():void{
    this.graficosService.getGraficos().subscribe({
      next:(Response: graficos[]) =>{
        this.graficos=Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  

  public onOpenModal(mode:String, graficos?: graficos):void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode==='add'){
      button.setAttribute('data-target', '#addGraficosModal');
    } else if (mode==='delete') {
      this.deleteGraficos = graficos;
      button.setAttribute('data-target', '#deleteGraficosModal');
    } else if (mode==='edit') {
      this.editGraficos = graficos;
      button.setAttribute('data-target', '#editGraficosModal');
    }

    container?.appendChild(button);
    button.click();
  }
  
  public onAddGraficos(addForm: NgForm){
    document.getElementById('add-graficos-form')?.click();
    this.graficosService.addGraficos(addForm.value).subscribe({
        next: (response:graficos) => {
          console.log(response);
          this.getGraficos();
          addForm.reset();
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message);
          addForm.reset();
        }
      }
    )
  }

  public onUpdateGraficos(graficos: graficos){
    this.editGraficos=graficos;
    document.getElementById('add-graficos-form')?.click();
    this.graficosService.updateGraficos(graficos).subscribe({
        next: (response:graficos) => {
          console.log(response);
          this.getGraficos();
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message);
        }
      }
    )
  }

  public onDeleteGraficos(idSkill: number):void{
    this.graficosService.deleteGraficos(idSkill).subscribe({
        next: (response:void) => {
          console.log(response);
          this.getGraficos();
        },
        error:(error:HttpErrorResponse) => {
          alert(error.message);
        }
      }
    )
  }

}
