import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homeprofe',
  templateUrl: './homeprofe.page.html',
  styleUrls: ['./homeprofe.page.scss'],
})
export class HomeprofePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back(); // Navega a la página anterior
  }
  vinculos:Itemlist[]=[{
    ruta:'/asistenciaprofe',
    titulo:'Asistencia',
    icono:'walk'
  }
]

}
