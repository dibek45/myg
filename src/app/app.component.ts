import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){

  }
  title = 'gym';
  ngOnInit(): void {
    // Navegar a la ruta del componente1 del módulo externo
    this.router.navigate(['/login']);
  }
}
