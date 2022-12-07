import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  products: Product[] = [];
  id!:number;
  constructor(
    public service:ProductService,
    private route: ActivatedRoute,
    private router:Router,
  ) { }
  ngOnInit(): void {
    
    this.getProductByType();
  }

  private getProductByType()
  {
    this.id = this.route.snapshot.params['id'];
    this.service.getAll().subscribe((data)=>{
      data.forEach(d=>{
        if(d.typeid == this.id)
        {
          this.products.push(d);
        }
  
      })
      console.log(this.products);
    })

    
  }

}
