import { Component, OnInit } from '@angular/core';
import { Itemlist } from 'src/app/interfaces/itemlist';
import { NavController, PopoverController } from '@ionic/angular';
import { PerfilPopoverPage } from '../perfil-popover/perfil-popover.page'; // Importa el componente

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController, private popoverController: PopoverController) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back(); 
  }

  async openPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PerfilPopoverPage,
      event: event, // Necesario para posicionar el popover
      translucent: true
    });
    await popover.present();
  }

  vinculos: Itemlist[] = [
    {
      ruta: '/asistencia',
      titulo: 'Asistencia',
      icono: 'walk'
    },
    {
      ruta: '/registrar-asistencia',
      titulo: 'Registrar Asistencia',
      icono: 'qr-code-outline'
    }
  ];
}
