import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/Brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  data: Brand[] = [];

  constructor(
    public brandservice: BrandService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getBrands();
  }
  private getBrands()
  {
    this.brandservice.getAll().subscribe((data:Brand[])=>{
      this.data = data;
      console.log(data);
    })
  }

}
