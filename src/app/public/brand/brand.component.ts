import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../Models/Product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  products: Product[] = [];
  id!:number;
  constructor(
    public service:ProductService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }
  ngOnInit(): void {
    
    this.getProductByBrand();
  }

  private getProductByBrand()
  {
    this.id = this.route.snapshot.params['id'];
    this.service.getAll().subscribe((data)=>{
      data.forEach(d=>{
        if(d.brandid == this.id)
        {
          this.products.push(d);
        }
  
      })
      console.log(this.products);
    })

  }

}
