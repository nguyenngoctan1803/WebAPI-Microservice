import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Brand } from 'src/app/Models/Brand';

import { Order } from 'src/app/Models/Order';
import { Product } from 'src/app/Models/Product';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  brands: Brand[] = [];
  totalprice:number = 0;
  discount:number = 0;
  guid = localStorage.getItem('customer');
  constructor(
    public productservice: ProductService,
    public brandservice: BrandService,
    public cartservice: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.getCart();
  }
  
  private getCart() {
    this.cartservice.getAll().subscribe((data)=>{
    data.forEach(d=>{
      if(d.status =='waiting' && d.guid == this.guid)
      {
        this.productservice.getById(d.productid!).subscribe((product)=>{
          this.products.push(product)
          this.brandservice.getById(product.brandid).subscribe((brand)=>{
            this.brands.push(brand);       
          })
          this.totalprice += product.price || 0;
          this.discount += 2000;   
        })
        console.log(this.products);
      }
      
    })
      
   })

  }
  
}
