import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { BrandComponent } from '../brand/brand.component';
import { CartComponent } from '../cart/cart.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';
import { OrderComponent } from '../order/order.component';
import { ShopComponent } from '../shop/shop.component';
import { TypeComponent } from '../type/type.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderedComponent } from '../ordered/ordered.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    BrandComponent,
    TypeComponent,
    DetailComponent,
    CartComponent,
    OrderComponent,
    OrderedComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class HomeModule { }
