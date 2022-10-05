import { Component, OnInit } from '@angular/core';



interface Product{

sno: string;
name: string;
image: string;
qty:number;
price: number;


}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  public product: Product ={

    sno: "AA010",
    name: "I-Watch",
    image: 'https://cdn.shopify.com/s/files/1/0266/1371/0884/products/Ice_Blue_3_f44256ba-0851-4631-817a-f86413f2d736.png?v=1657287100',
    qty:12,
    price: 1234
    
    }

  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty():void{


    this.product ={

      ...this.product,
      qty: this.product.qty+1
    }

  }

  public decrementQty():void{

    this.product.qty=this.product.qty-1

  
  }

}
