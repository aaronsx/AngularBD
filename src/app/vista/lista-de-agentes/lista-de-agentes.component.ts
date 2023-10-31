import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgentesService } from 'src/app/servicios/agentes.service';

@Component({
  selector: 'app-lista-de-agentes',
  templateUrl: './lista-de-agentes.component.html',
  styleUrls: ['./lista-de-agentes.component.css']
})
export class ListaDeAgentesComponent  {
  usuario:any;
  
  constructor(private agentesService:AgentesService){}
  
  ngOnInit(){
    this.agentesService.get()
    .subscribe(data => this.usuario = data);
  }
 
}
