import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any[]=[
    {id:1,name:'Shoes',price:500,display:"../assets/images.jpg"},
    {id:2,name:'Cloths',price:500,display:"../assets/images.jpg"},
    {id:3,name:'Wallet',price:500,display:"../assets/images.jpg"},
    {id:4,name:'Belt',price:500,display:"../assets/images.jpg"},
    {id:5,name:'Bottle',price:500,display:"../assets/images.jpg"},
    {id:6,name:'Keys',price:500,display:"../assets/images.jpg"}
  ]

  constructor() { }
  

  ngOnInit(): void {
  }

 

}
