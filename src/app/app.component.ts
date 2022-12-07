import { Component } from '@angular/core';
import { Brand } from './Models/Brand';
import { Product } from './Models/Product';
import { Type } from './Models/Type';
import { BrandService } from './services/brand/brand.service';
import { ProductService } from './services/product/product.service';
import { TypeService } from './services/type/type.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DmitDemo';
  
}
