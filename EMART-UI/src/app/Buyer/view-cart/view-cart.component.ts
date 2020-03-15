import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/Models/cart';
import { Item} from 'src/app/Models/item';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  cartlist:cart[];
  item:Item;
  cart:cart;
  count:number;
    constructor(private route:Router,private service:BuyerService) {
      let buyerid=Number(localStorage.getItem('buyerid'));
      this.service.GetCart(buyerid).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
      });
      // if(localStorage.getItem("buyerid"))
      // {
       
  
      // }
      // else{
      //   this.route.navigateByUrl('/home/login');
      // }
    
     }
    ngOnInit() {
    }
  BuyNow(item1:Item){
        console.log(item1);
        this.item=item1;
        localStorage.setItem('item1',JSON.stringify(this.item));
        this.route.navigateByUrl("buyer-landing-page/buy-product");
  }
  Remove(cartid:number){
  let id=cartid;
    alert("deleted")
    console.log(cartid);
    this.service.DeleteFromCart(cartid).subscribe(res=>{
      console.log('Item Removed from Cart');
      alert('Item Removed from Cart');
    })
  }
}


