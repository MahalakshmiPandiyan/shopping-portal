import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product:any=[];
  public grantTotal:number=0;
  constructor(public cartService:CartService) { }

  ngOnInit(): void {
   
    this.product=this.cartService.getProduct()
    // this.grantTotal=this.cartService.getTotalPrice();
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  decrement(id:any)
  {
    for(let j of this.cartService.cartItemList)
    {
      if(j.id==id)
      {
        j.quantity=j.quantity-1;
        j.total=j.total-j.price;
      }

    }

  }
  increment(id:any){
    for(let j of this.cartService.cartItemList)
    {
      if(j.id==id)
      {
        j.quantity=j.quantity+1;
        j.total=j.total+j.price
      }

    }

  }

}
