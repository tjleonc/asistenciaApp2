import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignaturas } from 'src/app/interfaces/itemlist';

@Component({
  selector: 'app-asginatura',
  templateUrl: './asginatura.page.html',
  styleUrls: ['./asginatura.page.scss'],
})
export class AsginaturaPage implements OnInit {

  asignatura: Asignaturas | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
  }
}
