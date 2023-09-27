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
  actived: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'David', precio: 30, actived: true },
  { id: 2, name: 'Alejandro', precio: 1, actived: false },
  { id: 3, name: 'Diana', precio: 5, actived: true },
  { id: 4, name: 'Julia', precio: 8, actived: true },
  { id: 5, name: 'Aaron', precio: 9, actived: true },
  { id: 6, name: 'Luisa', precio: 11, actived: true },
  { id: 7, name: 'Carlos', precio: 13, actived: true },
  { id: 8, name: 'Kevin', precio: 14, actived: true },
  { id: 9, name: 'Juan', precio: 17, actived: true },
  { id: 10, name: 'Norma', precio: 19, actived: true },
  { id: 15, name: 'Aaron', precio: 9, actived: true },
  { id: 16, name: 'Luisa', precio: 11, actived: true },
  { id: 17, name: 'Carlos', precio: 13, actived: true },
  { id: 18, name: 'Kevin', precio: 14, actived: true },
  { id: 19, name: 'Juan', precio: 17, actived: true },
  { id: 20, name: 'Norma', precio: 19, actived: true },
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {constructor(private service:EmployeeService,private dialog: MatDialog,private router: Router){
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

displayedColumns: string[] = ['id', 'name', 'created_at', 'actived'];
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
  this.router.navigate(['home/user/new-user']);
}


}