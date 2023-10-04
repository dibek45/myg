import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {  HomeRoutingModule } from './home-routing.module';
import { FingerPrintComponent } from './finger-print/finger-print.component';
import { AuthFaceComponent } from './auth-face/auth-face.component';
import { CustomMaterialModule } from '../shared/material-module';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/shared/material-module/material-module.module';
import { UsuarioModule } from './user/user.module';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from '../shared/notification.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductModule } from './product/product.module';



@NgModule({
  declarations: [FingerPrintComponent,AuthFaceComponent],
  providers:[NotificationService],
  imports: [
   
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MaterialModuleModule,
    UsuarioModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    MatFormFieldModule,
    
  
    
    
  ]
  
})
export class HomeModule { }
