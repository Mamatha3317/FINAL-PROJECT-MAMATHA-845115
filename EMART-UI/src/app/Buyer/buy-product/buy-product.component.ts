import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { ItemService } from 'src/app/Services/item.service';
import { Router } from '@angular/router';
import { cart } from 'src/app/Models/cart';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  item:Item;
  list1:Item[];
  submitted=false;
  cart:cart;
  transaction:PurchaseHistory;
  buyproductform:FormGroup;
  constructor(private formbuilder:FormBuilder,private buyer:BuyerService,private items:ItemService,private route:Router) { 
    if(localStorage.getItem("Sellerid")==null)
    {
      this.route.navigateByUrl('/home/login');

    }
  
  }

  ngOnInit() {
    this.buyproductform=this.formbuilder.group({
      itemname:[''],
      TransactionType:[''],
      cardNumber:[''],
      CVV:[''],
      expirydate:[''],
      name:[''],
      
      Sellerid:[''],
      NoOfItems:[''],
      itemid:[''],
      DateTime:['']
    })
    this.Viewitems()
    this.viewdata();
    
  }
  viewdata()
  {
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.itemid);
    this.buyproductform.patchValue({
        itemname:this.item.itemname,
      
      
    })
  }
  Viewitems()
{ 
  this.items.GetAllItems().subscribe(res=>
    {
      this.list1=res;
      console.log(this.list1);
    },
    err=>{
      console.log(err);
    });
}
buy(item2:Item)

{
  console.log(item2);
  localStorage.setItem('item1',JSON.stringify(item2));
  this.route.navigateByUrl('buyerslandingpage/purchasepage');

}
AddtoCart(item2:Item){
  let itemlocal=JSON.stringify(localStorage.getItem("item1"));
  console.log(item2);
  let buyerid=localStorage.getItem('buyerid');
 this.cart=new cart();
 this.cart.cartid=(Math.round(Math.random()*1000));
 this.cart.itemid=item2.itemid;
 this.cart.categoryid=item2.categoryid;
 this.cart.subCategoryid=item2.subCategoryid;
 this.cart.sellerid=item2.sellerid;
 this.cart.stocknumber=Number(item2.stocknumber);
  this.cart.price=Number(item2.price);
 this.cart.description=item2.description;
 this.cart.imagepath=item2.imagepath;
 this.cart.buyerid=Number(localStorage.getItem("buyerid"));
 console.log(this.cart);
 this.buyer.AddToCart(this.cart).subscribe(res=>{
   console.log("Record added to Cart");
   alert('Item has been Added To Cart');
 })
}
s

}