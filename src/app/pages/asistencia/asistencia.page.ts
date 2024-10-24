import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Asignaturas } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  asignatura:Asignaturas[]=[{
    id:'1',
    nombre:'Matemáticas',
    codigo:'MAT-101',
    profesor:'Juan Pérez',
    ruta:'/asignatura',
  },
  {
    id:'2',
    nombre:'Lenguaje',
    codigo:'LEN-101',
    profesor:'Juan Pérez',
    ruta:'/asignatura',
  }]

  onClick(id:string){
    let xtra:NavigationExtras={
      state:{
        id_inst:id,
      }
    }
    this.router.navigate(['verasistencia/'], xtra)
  }
}
