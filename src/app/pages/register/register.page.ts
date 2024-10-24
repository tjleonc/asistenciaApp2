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
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  // Método de registro
  async onRegister() {
    // Validación de campos vacíos
    if (!this.email || !this.password || !this.confirmPassword) {
      this.showToast('Rellene todos los campos.', 'secondary');
      return;
    }

    // Validación de que las contraseñas coincidan
    if (this.password !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden.', 'secondary');
      return;
    }
    if (!this.isEmailValid(this.email)) {
      this.showToast('El correo debe ser valido', 'secondary');
      return;
    }
    if (!this.isValidInstitutionEmail(this.email)) {
      this.showToast('Por favor, utilice un correo de la institución.', 'secondary');
      return;
    }
    // Intentar registrar usuario
    try {
      const result = await this.authService.register(this.email, this.password);

      if (result) { // Si el registro fue exitoso
        // Mostrar alerta de registro exitoso
        this.showAlert('¡Registro exitoso!', 'Has sido registrado con éxito.');
      } 
    } catch (error: any) {
      console.error('Error al registrar usuario:', error);
      // Manejar errores de Firebase
      this.handleError(error.code);
    }
  }
  isEmailValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
    return emailPattern.test(email);
  }
  isValidInstitutionEmail(email: string): boolean {
    return email.endsWith('@profesorduoc.com') || email.endsWith('@alumnoduoc.com');
  }
  // Mostrar mensaje temporal
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000, // Mostrar durante 2 segundos
      color,          // Color basado en el tipo de mensaje
      position: 'top'
    });
    toast.present();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          this.router.navigate(['/login']);  // Redirigir al login al aceptar
        }
      }]
    });
    await alert.present();
  }
  
  // Manejo de errores específicos de Firebase
  handleError(errorCode: string) {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        this.showToast('El correo ya está registrado.', 'secondary');
        break;
      case 'auth/weak-password':
        this.showToast('La contraseña es muy débil. Escoja una más segura.', 'secondary');
        break;
      default:
        this.showToast('Error inesperado.', 'secondary');
        break;
    }
  }
}
