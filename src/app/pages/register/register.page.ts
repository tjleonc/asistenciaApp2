import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit() {
  }

  async register() {
    // Verificar si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí iría la lógica para registrar al usuario, por ejemplo:
    // await this.authService.register(this.email, this.password);

    // Redirigir al login después de registrar
    this.router.navigate(['/login']);
  }

}
