import { Component } from '@angular/core';
import { SharedService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isLogin: boolean = false;

  constructor(private sharedService: SharedService,private router: Router) { }

  ngOnInit(): void {
    this.sharedService.getLoginStatus().subscribe(status => {
      this.isLogin = status;
    });
  }


  exit(){
    this.router.navigate(['login']);

  }
  buscador(){
  }
  user(){
    this.router.navigate(['home/user/table']);
  }

  product(){
    
    this.router.navigate(['home/product/table']);
  }



}
