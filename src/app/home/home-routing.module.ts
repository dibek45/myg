import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthFaceComponent } from './auth-face/auth-face.component';
import { FingerPrintComponent } from './finger-print/finger-print.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
        children: [
                    {
                      path: 'auth-face', // child route path
                      component: AuthFaceComponent, // child route component that the router renders
                    },
                    {
                      path: 'finger-print',
                      component: FingerPrintComponent, // another child route component that the router renders
                    },
                    {
                      path: 'user',
                      component: UserComponent, // another child route component that the router renders
                    },
                    {
                      path: 'product',
                      component: ProductComponent, // another child route component that the router renders
                    },
        ], 
  },
  
  // Otras rutas y componentes relacionados del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
