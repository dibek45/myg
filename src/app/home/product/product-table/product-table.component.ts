import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  precio: number;
  cantidad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Proteina', precio: 30, cantidad: 50 },
  { id: 2, name: 'Creatina', precio: 1, cantidad: 10 },
  { id: 3, name: 'Oxido', precio: 5, cantidad: 20 },
  { id: 4, name: 'Preentreno', precio: 8, cantidad: 15 },
  { id: 5, name: 'Esteroide', precio: 9, cantidad: 5 },
  { id: 6, name: 'Suero', precio: 11, cantidad: 25 },
  { id: 7, name: 'Gatorade', precio: 13, cantidad: 30 },
  { id: 8, name: 'Agua', precio: 14, cantidad: 100 }

];

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {constructor(private service:EmployeeService,private dialog: MatDialog,private router: Router){
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
}


@ViewChild(MatSort)
sort: MatSort = new MatSort;
@ViewChild(MatPaginator)
paginator!: MatPaginator;

form: FormGroup = new FormGroup({
  $key: new FormControl(null),
  fullName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.email),
  mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
  city: new FormControl(''),
  gender: new FormControl('1'),
  department: new FormControl(0),
  hireDate: new FormControl(''),
  isPermanent: new FormControl(false)
});

displayedColumns: string[] = ['id', 'name', 'precio', 'cantidad'];
dataSource = new MatTableDataSource(ELEMENT_DATA);
searchKey="";


onSearchClear(){}

applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
initializeFormGroup() {
  this.form.setValue({
    $key: null,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '1',
    department: 0,
    hireDate: '',
    isPermanent: false
  });
}



onCreate() {

  this.service.initializeFormGroup();
  this.router.navigate(['home/product/new-product']);
}


}