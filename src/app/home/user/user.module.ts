import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModuleModule } from 'src/shared/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { FlexLayoutModule } from '@angular/flex-layout';

import { userRoutesRoutingModule } from './user-routing.module';
import { UserTableComponent } from './user-table/user-table.component';
import { AddphotoModule } from 'src/app/shared/addphoto/addphoto.module';
import { PhotoComponent } from 'src/app/shared/photo/photo.component';

  

@NgModule({
  declarations: [
    UserFormComponent,UserComponent, UserTableComponent
  ],
  imports: [
    userRoutesRoutingModule,
    CommonModule,
    MaterialModuleModule,
    FormsModule,    ReactiveFormsModule,
    FlexLayoutModule,PhotoComponent
  ],
  exports:[],
  providers:[EmployeeService,DatePipe,NotificationService]
})
export class UsuarioModule { }
