import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from '../brand/brand.component';
import { LoginComponent } from '../auth/login/login.component';

import { OrderComponent } from '../order/order.component';
import { CreateproductComponent } from '../product/createproduct/createproduct.component';
import { ProductComponent } from '../product/product.component';
import { UpdateproductComponent } from '../product/updateproduct/updateproduct.component';
import { TypeComponent } from '../type/type.component';
import { DashboardComponent } from '../auth/dashboard/dashboard.component';
import { ProfileComponent } from '../auth/profile/profile.component';
const routes: Routes = [
  {path:"admin", component:DashboardComponent,
    children:[
    {path:"", component:ProfileComponent},
    {path:"product", component:ProductComponent},
    {path:"product/create", component:CreateproductComponent},
    {path:"product/update/:id", component:UpdateproductComponent},
    {path:"brand", component:BrandComponent},
    {path:"brand/create", component:CreateproductComponent},
    {path:"brand/update/:id", component:UpdateproductComponent},
    {path:"category", component:TypeComponent},
    {path:"category/create", component:CreateproductComponent},
    {path:"category/update/:id", component:UpdateproductComponent},
    {path:"order", component:OrderComponent},
    {path:"order/update/:id", component:UpdateproductComponent},
    {path:"login", component:LoginComponent, 
     children: [{path: '', component:LoginComponent}]},
    { path : '', redirectTo:'/login', pathMatch : 'full'}
  
]}

];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
