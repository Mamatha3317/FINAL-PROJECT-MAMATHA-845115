import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Item} from 'src/app/Models/item';
import { BuyerService } from 'src/app/services/buyer.service';
import { ItemService } from 'src/app/services/item.service';
import {Router} from '@angular/router';
import { Category } from 'src/app/Models/category';
import {cart} from 'src/app/Models/cart'; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchform:FormGroup;
  items:Item;
  list:Item[];
  list2:Item[];
  cart:cart;
  isShow:boolean=true;
  clist:Category[];
  
  
    constructor(private service:BuyerService,private route:Router,private formbuilder:FormBuilder,private services:ItemService) { }
  
    ngOnInit() {
      this.searchform=this.formbuilder.group({
        itemname:['']
      })
       this.Viewitems();
    }
    Viewitems()
    { 
      this.services.GetAllItems().subscribe(res=>
        {
          this.list=res;
          console.log(this.list);
        },
        err=>{
          console.log(err);
        });
    }
    searchitems()
    {
      this.items=new Item();
      this.items.itemname=this.searchform.value["itemname"];
      this.service.searchitems(this.items.itemname).subscribe(res=>{
        this.list2=res
        console.log(this.list2);
        console.log(res);
      }
      ,err=>{
        console.log(err);
      })
    }
    buy(item2:Item)
    {
      console.log(item2);
      localStorage.setItem('item1',JSON.stringify(item2));
      this.route.navigateByUrl('buyer-landing-page/buy-product');
    }
    AddToCart(item2:Item){
    //  let itemlocal=JSON.stringify(localStorage.getItem("item1"));
    //  console.log(item2);
      // let buyerid=localStorage.getItem('buyerid');
     this.cart=new cart();
     this.cart.cartid=(Math.round(Math.random()*1000));
     this.cart.itemid=item2.itemid;
     this.cart.categoryid=item2.categoryid;
     this.cart.subCategoryid=item2.subCategoryid;
     this.cart.sellerid=item2.sellerid;
     this.cart.stocknumber=Number(item2.stocknumber);
      this.cart.price=item2.price;
     this.cart.description=item2.description;
     this.cart.imagepath=item2.imagepath;
    this.cart.buyerid=Number(localStorage.getItem("buyerid"));
     console.log(this.cart);
     this.service.AddToCart(this.cart).subscribe(res=>{
     
       console.log("Record added To Cart");
       alert('Item has been Added To Cart');
     })
    //  this.route.navigateByUrl("buyer-landing-page/view-cart")
    }
 }
    
  