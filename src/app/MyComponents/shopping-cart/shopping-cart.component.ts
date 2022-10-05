import { Component, OnInit } from '@angular/core';


interface ProductCart{

  sno: string;
  name: string;
  image: string;
  qty:number;
  price: number;
  
  
  }

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})




export class ShoppingCartComponent implements OnInit {



  public products: ProductCart[] =[

    {
    
    sno: "AA010",
    name: "I-Watch",
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPL73_VW_34FR+watch-41-alum-starlight-nc-8s_VW_34FR_WF_SI?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=1660781170889%2C1661978672377',
    qty:12,
    price: 1234,
    
    },
    {
    
    sno: "AA011",
    name: "I-Watch Gen 2",
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FG133?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1614983667000',
    qty:2,
    price:2100,
    
    },
    {
    
    sno: "AA012",
    name: "I-Watch Series1",
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660090390-1-1660090386.jpg',
    qty:122,
    price: 1400,
    
    },
    {
    
    sno: "AA013",
    name: "I-Watch Gen 2 series 2",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeR6DfgrP0LlszR0QqEjYJLmKZe2puOsIow&usqp=CAU',
    qty:2,
    price: 1600,
    
    }
    
    
    
    ];


  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty(productId: string):void {

 
    this.products=this.products.map((product:ProductCart) =>{
   if(product.sno === productId){

    return{

      ...product,
      qty : product.qty+1
    }
   }
  return product;
    })
  
  }
  public decrementQty(productId: string):void {


    this.products=this.products.map((product:ProductCart) =>{
      if(product.sno === productId){
   
       return{
   
         ...product,
         qty : product.qty-1
       }
      }
     return product;
       })
      }

      public calcGrandTotal():number{

       let total:number= 0;


       for(let product of this.products){

        total+=(product.qty* product.price);
       }

       return total;

      }

}
