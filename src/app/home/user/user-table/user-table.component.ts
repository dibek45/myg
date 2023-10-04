import { Component, HostListener, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

export interface Usuarios {
  id: number;
  name: string;
  created_at:string;
  actived: boolean;
  img?:string;
}

const ELEMENT_DATA: Usuarios[] = [
  { id: 1, name: 'David velazquez', created_at: '2023-10-02', actived: true, img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"},
  { id: 2, name: 'Alejandro velazquez', created_at: '2023-10-02', actived: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfeYel1SQu2meF1I0iQvCclVvtMERWFMPmsX-znktEC3FWQ_IYCGWIUVk&s=10" },
  { id: 3, name: 'Diana', created_at: '2023-10-02', actived: true,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4m09vwsYbh5sp8f5579NaklV4ci1KUHE4HxQnlpd3IoskYmSOVPNOf_S&s=10" },
  { id: 4, name: 'Julia', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0XdnAqk7MLMd-uRW8LQaq707iifTusJq_ezBGtv62O6wubWjdCNe0EFY&s=10" },
  { id: 5, name: 'Aaron', created_at: '2023-10-02', actived: true,  img:"https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60 100w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60 200w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60 300w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60 400w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 500w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 600w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60 700w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60 800w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60 900w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60 1000w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60 1200w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60 1400w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=60 1600w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1800&q=60 1800w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=60 2000w" },
  { id: 6, name: 'Luisa', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZBZBhjjAkGyIOGigT_1JPwbVsSRF40km2g&usqp=CAU" },
  { id: 7, name: 'Carlos', created_at: '2023-10-02', actived: true,  img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  { id: 8, name: 'Kevin', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNEtr73VlMrQLG9PgbIMa4KcL8Hkq_brd_g&usqp=CAU" },
  { id: 9, name: 'Juan', created_at: '2023-10-02', actived: true, img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  { id: 10, name: 'Norma', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4m09vwsYbh5sp8f5579NaklV4ci1KUHE4HxQnlpd3IoskYmSOVPNOf_S&s=10" },
  { id: 15, name: 'Aaron', created_at: '2023-10-02', actived: true, img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  { id: 16, name: 'Luisa', created_at: '2023-10-02', actived: true, img:"https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60 100w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60 200w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60 300w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60 400w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60 500w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60 600w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60 700w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60 800w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60 900w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60 1000w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=60 1200w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60 1400w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1600&q=60 1600w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=1800&q=60 1800w, https://plus.unsplash.com/premium_photo-1664203068145-b1d7d1680f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZSUyMGZyb250fGVufDB8fDB8fHww&auto=format&fit=crop&w=2000&q=60 2000w" },
  { id: 17, name: 'Carlos', created_at: '2023-10-02', actived: true, img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  { id: 18, name: 'Kevin', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4m09vwsYbh5sp8f5579NaklV4ci1KUHE4HxQnlpd3IoskYmSOVPNOf_S&s=10" },
  { id: 19, name: 'Juan', created_at: '2023-10-02', actived: true, img:"https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8" },
  { id: 20, name: 'Norma', created_at: '2023-10-02', actived: true, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNEtr73VlMrQLG9PgbIMa4KcL8Hkq_brd_g&usqp=CAU" },
];



@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  
  constructor(private service:EmployeeService,private dialog: MatDialog,private router: Router){
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  this.filteredElements = ELEMENT_DATA.slice(); // Inicializa con todos los elementos

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
searchKey2="";
searchKey="";

  // Mantén una copia de los datos originales
  originalData: Usuarios[] = ELEMENT_DATA;

  // Inicializa filteredElements con todos los elementos al principio
  filteredElements: Usuarios[] = this.originalData;

onSearchClear(){}

applyFilter(event: Event){
  const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    
  // Filtra los datos originales y actualiza filteredElements
  this.filteredElements = this.originalData.filter(element =>
    element.name.toLowerCase().includes(filterValue)
  );
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

viewDetails(){
  this.router.navigate(['home/user/user/1']);
}


}