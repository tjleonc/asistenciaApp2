import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string='';
  password:string='';

  constructor(private router:Router, private authService:AuthService ) { }

  ngOnInit() {
  }

  async login(){
    const isAuthenticaded = await this.authService.login(this.email, this.password); // Llama al método login del servicio de autenticación y le pasa el email y la contraseña
    if (isAuthenticaded){
      this.router.navigate(['/asistencia']) // Lo que hace es que si se autentifica, te envía al home
    }else{
      alert('Usuario o contraseña incorrectos') // Si no se autentifica, muestra un mensaje de alerta
    }
  }
}
