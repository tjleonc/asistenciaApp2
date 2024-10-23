import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back(); 
  }
  openProfile() {
    // Aquí puedes abrir una página de perfil, un modal, o lo que desees que haga este botón.
    console.log('Perfil abierto');
  }

  vinculos:Itemlist[]=[{
    ruta:'/asistencia',
    titulo:'Asistencia',
    icono:'walk'
  },
  {
    ruta:'/registrar-asistencia',
    titulo:'Registrar Asistencia',
    icono: 'qr-code-outline'
  }

]

}
