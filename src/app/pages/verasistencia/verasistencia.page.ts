import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignaturas } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-verasistencia',
  templateUrl: './verasistencia.page.html',
  styleUrls: ['./verasistencia.page.scss'],
})
export class VerasistenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

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
  idBuscado: number | null = null; // Inicialmente, no hay ID buscado

  seleccionarItem(id: number) {
    this.idBuscado = id; // Establece el ID del item seleccionado
  }
}
