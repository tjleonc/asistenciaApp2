import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavigationExtras, Router } from '@angular/router';
import { Asignaturas } from 'src/app/interfaces/itemlist';
=======
import { AsignaturaService } from 'src/app/services/asignatura.service';
>>>>>>> 7a5ceaba1c3eba14864e62cd1e366bdb934c94d4

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  asignaturas: any[] = [];

  constructor(private asignaturaService: AsignaturaService) {}

  async ngOnInit() {
    this.asignaturas = await this.asignaturaService.obtenerAsignaturasPorUsuario();
  }
<<<<<<< HEAD

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
=======
>>>>>>> 7a5ceaba1c3eba14864e62cd1e366bdb934c94d4
}
