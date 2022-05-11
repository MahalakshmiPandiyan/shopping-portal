import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public idList: any[] =[];
  public i:number=0;
  public j:number=0;

  
  public productList:any;
  constructor(private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
        this.productList=res;

        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});    
        });

       
    })
  }

  addtocart(item:any){
      
      for(let i of this.cartService.cartItemList)
      {
        this.idList.push(i.id);
      }
      if(this.idList.includes(item.id))
      {
        for(let j of this.cartService.cartItemList)
        {
          if(j.id==item.id)
          {
            j.quantity=j.quantity+1;
            j.total=j.total+j.price;
          }

        }

      }
      else{
        this.cartService.addtoCart(item);
      }
    }
}
