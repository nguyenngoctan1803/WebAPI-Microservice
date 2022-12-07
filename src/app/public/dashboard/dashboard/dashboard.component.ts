import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/Brand';
import { Type } from 'src/app/Models/Type';
import { BrandService } from 'src/app/services/brand/brand.service';
import { TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  types: Type[] = [];
  brands: Brand[] = [];

  constructor(
    public brandservice:BrandService,
    public typeservice:TypeService,
  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
  }

  private getBrands()
  {
    this.brandservice.getAll().subscribe((data:Brand[])=>{
      this.brands = data;
      console.log(this.brands);
    })
  }
  private getTypes()
  {
    this.typeservice.getAll().subscribe((datas:Type[])=>{
      this.types = datas;
      console.log(datas);
    })
  }

}
