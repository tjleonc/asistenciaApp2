// perfil.page.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { getAuth } from 'firebase/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userInfo: any = {}; // Almacena la información del usuario
  isEditing: boolean = false; // Bandera para controlar la edición

  constructor(private authService: AuthService, private navCtrl: NavController) { }

  async ngOnInit() {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user) {
      this.userInfo = await this.authService.getUserInfo(user.uid); // Obtiene la información del usuario
    }
  }

  // Método para editar la información
  editUserInfo() {
    if (this.isEditing) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        this.authService.updateUserInfo(user.uid, this.userInfo); // Actualiza la información del usuario
      }
    }
    this.isEditing = !this.isEditing; // Cambia el estado de edición
  }
  goBack() {
    this.navCtrl.back(); // Navega a la página anterior
  }
}// Lógica para editar la información del usuario
  
