import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Agente } from 'src/app/modelos/agente';
import { AgentesService } from 'src/app/servicios/agentes.service';

@Component({
  selector: 'app-editor-de-agentes',
  templateUrl: './editor-de-agentes.component.html',
  styleUrls: ['./editor-de-agentes.component.css']
})
export class EditorDeAgentesComponent {

  agente :Agente= {id:0,email:"", first_name:"",last_name:"",avatar:""};
  idAgente!:number|null;
  constructor(private agentesService:AgentesService,private ruta:ActivatedRoute
    ){}

  ngOnInit(){
    //Cargo el formulario de agente si hay id con los datos del agente 
    //seleccionado(a traves de la ruta)
    if(this.ruta.snapshot.paramMap.get("id")){
      //la ! hace que sea null cuando lo tiene que ser
      this.idAgente=parseInt(this.ruta.snapshot.paramMap.get("id")!);
      this.agentesService.getAgenteById(this.idAgente).subscribe(res=>this.agente=res.data);
      console.log(this.idAgente);
    }else
    {
      //No hay id en la ruta, entonces sera un nuevo usuario
    }

  }
}
