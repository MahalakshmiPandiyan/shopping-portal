import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public grandTotal=0;
  public sum=0;

  constructor() { }

  getProduct(){
    return this.cartItemList;
  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    console.log(this.cartItemList)
    console.log("cart"+JSON.stringify(this.cartItemList));
   
  }


  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }

  totalLength(){
    let lengthList=0;
    lengthList=this.cartItemList.length;
    console.log(lengthList);
    return lengthList
  }
}