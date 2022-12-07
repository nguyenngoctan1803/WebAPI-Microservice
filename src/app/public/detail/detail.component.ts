import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/Brand';
import { Cart } from 'src/app/Models/Cart';
import { Order } from 'src/app/Models/Order';
import { Product } from 'src/app/Models/Product';
import { Type } from 'src/app/Models/Type';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-type',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product = new Product;
  brand: Brand = new Brand;
  type: Type = new Type;
  id!: number;
  alert ='';
  constructor(
    public productservice: ProductService,
    public brandservice: BrandService,
    public cartservice: CartService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {

    this.getProductById();
  }

  private getProductById() {
    this.id = this.route.snapshot.params['id'];
    this.productservice.getById(this.id).subscribe((data: Product) => {
      this.product = data;
      this.getBrandById(this.product.brandid)
      console.log(data);
    })

  }
  private getBrandById(id: any) {
    this.brandservice.getById(id).subscribe((data: Brand) => {
      this.brand = data;
      console.log(data);
    })

  }
  addToCart() {
    var cart = new Cart;
    cart.productid = this.id;
    cart.status = 'waiting';
    cart.guid = localStorage.getItem('customer')?.toString();
    this.cartservice.addCart(cart).subscribe((res:any)=>{
      console.log('Post Cart Successfully!');
      this.alert = 'This product is already in your cart';
    })
  }

}
