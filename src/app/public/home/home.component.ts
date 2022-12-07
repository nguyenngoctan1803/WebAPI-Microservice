import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    var guid = localStorage.getItem('customer');
    if(guid == null)
    {
      guid = Guid.create().toString();
      localStorage.setItem('customer', guid);
    }

  }

}
