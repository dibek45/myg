import { Component, HostListener } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { DepartmentService } from 'src/app/shared/department.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  isSingleColumnLayout = false; // Variable para controlar el diseño de las columnas

  webcamImage: WebcamImage | undefined;
  takePhoto:boolean=true;
  
  handleImage($event: WebcamImage) {
    this.webcamImage = $event;
  }

  constructor(public service: EmployeeService,
    public departmentService: DepartmentService,
    public notificationService: NotificationService,
    private router: Router
    ){
  }

  birthDate:string="";
  
  ngOnInit() {
   // this.service.getEmployees();
    this.checkWindowWidth(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth(); // Verificar el ancho de la ventana al cambiar su tamaño
  }

  checkWindowWidth() {
    this.isSingleColumnLayout = window.innerWidth < 768; // Modificar el valor de acuerdo al ancho de la ventana
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
    }
  }


  onClose() {
    this.router.navigate(['home/user/table']);
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }

  addItem(value: boolean) {
    this.takePhoto=value;
  }


 

  }

 


