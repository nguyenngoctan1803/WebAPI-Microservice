import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/Brand';
import { Product } from 'src/app/Models/Product';
import { Type } from 'src/app/Models/Type';
import { BrandService } from 'src/app/services/brand/brand.service';
import { ProductService } from 'src/app/services/product/product.service';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: Product[] = [];
  brand: Brand = new Brand;
  type: Type = new Type;

  constructor(
    public productservice: ProductService,
    public brandservice: BrandService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts()
  {
    this.productservice.getAll().subscribe((data:Product[])=>{
      this.data = data;
      console.log(data);

    })
  }
}
