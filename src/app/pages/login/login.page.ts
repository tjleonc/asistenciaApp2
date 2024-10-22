import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastController: ToastController // Asegúrate de que ToastController esté importado
  ) { }

  ngOnInit() {
  }

  // Método para mostrar el toast
  async presentToast(message: string, duration: number = 2000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top' // Puedes usar 'top', 'middle' o 'bottom'
    });
    toast.present();
  }

  async login() {
    // Verificar si los campos están vacíos
    if (this.email === '' || this.password === '') {
      this.presentToast('Por favor llene todos los campos'); // Mostrar toast en lugar de alert
      return;
    } else {
      const isAuthenticaded = await this.authService.login(this.email, this.password);
      if (isAuthenticaded) {
        this.router.navigate(['/inicio']); // Redirigir a la página de inicio si es exitoso
      } else {
        this.presentToast('Usuario o contraseña incorrectos'); // Mostrar toast en lugar de alert
      }
    }
  }
}
