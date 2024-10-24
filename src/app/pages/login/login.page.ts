import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async onLogin() {
    // Validar formato del correo electrónico
    if (!this.validateEmail(this.email)) {
      this.showToast('Debes usar un correo institucional.', 'secondary');
      return; // No continuar si la validación falla
    }

    console.log('Intentando iniciar sesión con:', this.email, this.password);
    const result = await this.authService.login(this.email, this.password);
    if (result.success) {
      // Redirigir según el tipo de usuario
      if (this.email.endsWith('@profesorduoc.com')) {
        this.router.navigate(['/homeprofe']);
      } else if (this.email.endsWith('@alumnoduoc.com')) {
        this.router.navigate(['/inicio']);
      }
    } else {
      // Manejar error de inicio de sesión
      this.handleLoginError(result.message);
    }
  }

  validateEmail(email: string): boolean {
    return email.endsWith('@profesorduoc.com') || email.endsWith('@alumnoduoc.com');
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    toast.present();
  }

  handleLoginError(errorCode: string) {
    console.error('Error de inicio de sesión:', errorCode); // Verificar error en consola
    switch (errorCode) {
      case 'auth/user-not-found':
        this.showToast('Usuario no encontrado.', 'secondary');
        break;
      case 'auth/wrong-password':
        this.showToast('Contraseña incorrecta.', 'secondary');
        break;
      case 'auth/invalid-email':
        this.showToast('Correo inválido.', 'secondary');
        break;
      default:
        this.showToast('Error inesperado. Intente nuevamente.', 'secondary');
        break;
    }
  }
}
