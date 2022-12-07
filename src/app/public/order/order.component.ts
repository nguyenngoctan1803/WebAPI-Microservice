import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Brand } from 'src/app/Models/Brand';
import { Cart } from 'src/app/Models/Cart';
import { Order } from 'src/app/Models/Order';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products: Product[] = [];
  totalprice:number = 0;
  discount:number = 0;
  order = new Order;
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
  }
  private getCart() {
    this.cartservice.getAll().subscribe((data)=>{
    data.forEach(d=>{
      if(d.guid == this.guid)
      {
        this.productservice.getById(d.productid!).subscribe((product)=>{
          this.totalprice += product.price || 0;
          this.discount += 2000;
        })
      }
     
    })
      
   })
  }
  Orderinput = this.fb.group({
    name: ['', [Validators.required, Validators.pattern("^[a-zA-Z _-]+$")]],
    phone: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],//validator.email
    address: ['',[Validators.required]],
  });

  get f() {
    return this.Orderinput.controls;
  }

  onSubmit() {
    this.addOrder(); 
  }
  addOrder()
  {
    this.order.date = new Date(); // datetime.now
    this.order.guid = this.guid?.toString();
    this.order.status = 'waiting';
    console.log(this.order);
    this.orderservice.addOrder(this.order).subscribe((res: any) => {
      console.log('Post Order Successfully!');
      // cập nhật số lượng product
      this.updateCartProduct();
      // xóa localstorage
      
    })
  }
  updateCartProduct()
  {
    this.cartservice.getAll().subscribe((data)=>{
    data.forEach(d=>{
      if(d.guid == this.guid)
      {
        d.status = "ordered";
        this.cartservice.updateCart(d, d.id!).subscribe((res:any)=>{
          console.log('Update Cart Successfully!');
        })
        this.productservice.getById(d.productid!).subscribe((product)=>{
          product.quantity! -= 1;
          this.productservice.updateProduct(product, product.id!).subscribe((res:any)=>{
            console.log('Update Quantity Successfully!');
          })
        })
      }
     
    })
      
   })
   this.goToOrderedAlert();
  }

  goToOrderedAlert() {
    this.router.navigate(['/ordered']);
  }
}
