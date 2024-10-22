import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController // Asegúrate de que AlertController esté importado
  ) { }

  ngOnInit() {}

  // Método para mostrar la alerta con el ícono de Ionic
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert', // Clase CSS personalizada
      header: 'Registro exitoso',
 
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']); // Redirige al login
        }
      }]
    });
  
    await alert.present();
  }

  // Método para mostrar el toast (se mantiene solo para errores)
  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top' // Puedes usar 'top', 'middle' o 'bottom'
    });
    toast.present();
  }

  // Método de registro
  async register() {
    // Verificar si los campos están llenos
    if (this.email === '' || this.password === '' || this.confirmPassword === '') {
      this.presentToast('Por favor llene todos los campos');
      return;
    }

    const isRegistered = await this.authService.register(this.email, this.password, this.confirmPassword);
    if (isRegistered) {
      this.presentAlert(); // Solo muestra la alerta en caso de éxito
    } else {
      this.presentToast('Las contraseñas no coinciden');
    }
  }
}
