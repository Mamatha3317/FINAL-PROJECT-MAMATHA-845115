import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Item} from 'src/app/Models/item';
import { BuyerService } from 'src/app/services/buyer.service';
import { ItemService } from 'src/app/services/item.service';
import {Router} from '@angular/router';

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
  
  
    constructor(private service:BuyerService,private route:Router,private formbuilder:FormBuilder,private services:ItemService) { }
  
    ngOnInit() {
      this.searchform=this.formbuilder.group({
        itemname:['']
      })
       this.ViewItems();
    }
    ViewItems()
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
    buy()
    {
      this.route.navigateByUrl('buyer-landing-page/buy-product');
    }
    addtocart()
    {
      
    }
  }
  