import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  data: Product[] = [];

  constructor(
    public service:ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts()
  {
    this.service.getAll().subscribe((data:Product[])=>{
      this.data = data;
      console.log(data);
    })
  }

}
