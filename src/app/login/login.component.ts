import { Component } from '@angular/core';
import { SharedService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private sharedService: SharedService,private router: Router){
    this.username="";
    this.password="";
  }
  username: string;
  password: string;

  onSubmit() {
    // Aquí puedes agregar la lógica para procesar los datos del formulario
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
  
  login() {
    // Lógica de inicio de sesión exitoso

    // Establecer el estado de inicio de sesión en true
    this.sharedService.setLoginStatus(true);
    this.router.navigate(['home/auth-face']);

  }

}
