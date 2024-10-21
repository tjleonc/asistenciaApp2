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
    if(this.email=='' || this.password=='' || this.confirmPassword==''){
      alert('Por favor llene todos los campos')
      return
    }

    const isRegistered = await this.authService.register(this.email, this.password, this.confirmPassword);
    if (isRegistered) {
      alert('Registro exitoso');
      this.router.navigate(['/login']);
    } else {
      alert('Las contraseñas no coinciden');
    };
  }

}
