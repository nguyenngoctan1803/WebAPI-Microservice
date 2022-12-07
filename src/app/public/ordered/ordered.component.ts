import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Brand } from 'src/app/Models/Brand';
import { Cart } from 'src/app/Models/Cart';
import { Order, orders } from 'src/app/Models/Order';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {

  products: Product[] = [];
  totalprice:number = 0;
  discount:number = 0;
  ordered = new Order;
  cart = new Cart;
  guid = localStorage.getItem('customer');
  constructor(
    private orderservice: OrderService,
    private productservice: ProductService,
    private cartservice: CartService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCart();
    this.getOrder();
  }
  private getCart() {
    this.cartservice.getAll().subscribe((data)=>{
    data.forEach(d=>{
      if(d.status =='ordered' && d.guid == this.guid)
      {
        this.productservice.getById(d.productid!).subscribe((product)=>{
          this.products.push(product)
          this.totalprice += product.price || 0;
          this.discount += 2000;   
        })
      }
      
    })
      
   })

  }

  private getOrder()
  {
    this.orderservice.getAll().subscribe((orders)=>{
      orders.forEach(o=>{
       if(o.guid == this.guid)
       {
          this.ordered = o;
       } 
      })
      
    })
  }
}
