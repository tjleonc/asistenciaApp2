import { Component, OnInit } from '@angular/core';
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

}
