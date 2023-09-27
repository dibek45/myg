import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModuleModule } from 'src/shared/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WebcamModule } from 'ngx-webcam';
import { AddphotoModule } from 'src/app/shared/addphoto/addphoto.module';
import { PhotoComponent } from 'src/app/shared/photo/photo.component';
import { productRoutesRoutingModule } from './product-routing.module';
import { ProductTableComponent } from './product-table/product-table.component';

  


@NgModule({
  declarations: [
    ProductFormComponent,ProductComponent,ProductTableComponent

  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,    ReactiveFormsModule,
    FlexLayoutModule,WebcamModule,MaterialModuleModule,PhotoComponent,PhotoComponent,productRoutesRoutingModule
  ],
  providers:[]
})
export class ProductModule { }
