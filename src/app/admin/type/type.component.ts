import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/Models/Type';
import { TypeService } from 'src/app/services/type/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  data: Type[] = [];

  constructor(
    public typeservice: TypeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.getTypes();
  }
  private getTypes()
  {
    this.typeservice.getAll().subscribe((data:Type[])=>{
      this.data = data;
      console.log(data);
    })
  }

}
