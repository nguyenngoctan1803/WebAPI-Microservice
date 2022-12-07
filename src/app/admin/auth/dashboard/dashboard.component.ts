import { Component, OnInit } from '@angular/core';
import { Router, withDebugTracing } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private roles:string[]= [];
  isLoggedIn = false;
  AdminMode = false;
  SalerMode = false;
  StoreMode = false;
  username?:string;
  constructor(private tokenService:TokenService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();

    if(this.isLoggedIn){
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.AdminMode = this.roles.includes('admin');
      this.SalerMode = this.roles.includes('sale');
      this.StoreMode = this.roles.includes('store');

      this.username = user.username;
    }
    }
  
  logout() {
   this.tokenService.logout();
   window.location.reload();
  }
}
