import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { BrandComponent } from '../brand/brand.component';
import { CartComponent } from '../cart/cart.component';
import { ContactComponent } from '../contact/contact.component';
import { DetailComponent } from '../detail/detail.component';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from '../order/order.component';
import { OrderedComponent } from '../ordered/ordered.component';
import { ShopComponent } from '../shop/shop.component';
import { TypeComponent } from '../type/type.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ShopComponent },
      { path: 'product/detail/:id', component: DetailComponent },
      { path: 'brand/:id', component: BrandComponent },
      { path: 'type/:id', component: TypeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
      { path: 'ordered', component: OrderedComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
