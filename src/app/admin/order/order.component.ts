import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/Models/Order';
import { Product } from 'src/app/Models/Product';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  data: Order[] = [];
  brand: Product = new Product;


  constructor(
    public productservice: ProductService,
    public orderservice: OrderService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getOrders();
  }
  private getOrders()
  {
    this.orderservice.getAll().subscribe((data:Order[])=>{
      this.data = data;
      console.log(data);
    })
  }

}
