import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../auth/dashboard/dashboard.component';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from '../order/order.component';
import { BrandComponent } from '../brand/brand.component';
import { TypeComponent } from '../type/type.component';
import { LoginComponent } from '../auth/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from '../auth/helper/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from '../auth/profile/profile.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    OrderComponent,
    BrandComponent,
    TypeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  providers: [AuthInterceptor],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
