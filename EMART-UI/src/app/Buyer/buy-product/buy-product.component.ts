import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Item} from 'src/app/Models/item'; 
import {PurchaseHistory} from 'src/app/Models/purchase-history';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { cart } from 'src/app/Models/cart';



@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
cart:cart;
  item:Item;
submitted:false;
transaction:PurchaseHistory;
buyform:FormGroup;

  constructor(private formbuilder:FormBuilder,private router:Router,private service :BuyerService) { }

  ngOnInit() {
    this.buyform=this.formbuilder.group({
Itemid:[''],
TransactionType:[''],
cardnumber:[''],
CVV:[''],
ed:[''],
name:[''],
purchaseid:[''],
Sellerid:[''],
NoOfItems:[''],
// iid:[''],
DateTime:[''],
Remarks:[''],
    })
    
    this.GetCart();
  }
   GetCart(){
    this.cart=JSON.parse(localStorage.getItem('item1'));
    console.log(this.cart);
  console.log(this.cart.cartid);
    
  
}
purchase(){
 // this.submitted=true;
this.transaction=new PurchaseHistory();
this.transaction.Sellerid=this.cart.sellerid;
this.transaction.Itemid=this.cart.itemid;

this.transaction.NoOfItems=Number(this.buyform.value["NoOfItems"]);
this.transaction.Buyerid=Number(localStorage.getItem("buyerid"));
this.transaction.DateTime=this.buyform.value["DateTime"];
this.transaction.purchaseid=Math.round(Math.random()*1000);
this.transaction.TransactionType=this.buyform.value["TransactionType"];
this.transaction.Remarks=this.buyform.value["Remarks"];
console.log(this.transaction);
this.service.Additem(this.transaction).subscribe(res=>{
  alert(" Transaction successfull");
},err=>{console.log(err)}
)
this.router.navigateByUrl("buyer-landing-page/purchase-history")
}

}

