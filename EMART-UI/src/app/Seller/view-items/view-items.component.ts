import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {Item} from 'src/app/Models/item';

import {Seller} from 'src/app/Models/seller';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  itemForm:FormGroup;
submitted=false;
  list:Item[];
  item:Item;
  isShow:boolean=true;
  
  constructor(private formbuilder:FormBuilder,private service:ItemService) {
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{
      console.log(err)
    })
   }
    
   ngOnInit() {
    this.itemForm=this.formbuilder.group({
      itemid:[''],
      sellerid:[''],
      categoryid:[''],
      subCategoryid:[''],
      price:[''],
      description:[''],
      itemname:[''],
      remarks:[''],
      stocknumber:[''],
      imagepath:[''],
    });
    this.Viewitems();
   }
    
    Viewitems()
    {
      let sellerid=Number(localStorage.getItem("sellerid"));
  this.service.Viewitems(sellerid).subscribe(res=>
    {
      this.list=res;
      console.log(this.list);
    },
    err=>{
      console.log(err);
    });
}
Search1(){
  this.isShow=!this.isShow;
}
 Search(itemid:number)
{
  this.Search1();
  // this.isShow=!this.isShow;
  this.service.Getitems(itemid).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.itemForm.setValue({
      itemid:this.item.itemid,
      sellerid:this.item.sellerid,
      description:this.item.description,
      categoryid:this.item.categoryid,
      imagepath:this.item.imagepath,
      subCategoryid:this.item.subCategoryid,
      itemname:this.item.itemname,
      price:this.item.price,
      stocknumber:this.item.stocknumber,
      remarks:this.item.remarks,
  
  
    })
  })
}
  
  Update()
  {
    this.item=new Item();
    this.item.itemid=Number(this.itemForm.value["itemid"]);
    this.item.categoryid=Number(this.itemForm.value["categoryid"]);
    this.item.subCategoryid=Number(this.itemForm.value["subCategoryid"]);
    this.item.sellerid=Number(this.itemForm.value["sellerid"]);
    this.item.price=this.itemForm.value["price"];
    this.item.itemname=this.itemForm.value["itemname"];
    this.item.description=this.itemForm.value["description"];
    this.item.stocknumber=this.itemForm.value["stocknumber"];
    this.item.remarks=this.itemForm.value["remarks"];
    this.item.imagepath=this.itemForm.value["imagepath"];
    console.log(this.item);
    this.service.Updateitem(this.item).subscribe(res=>
      {
        console.log('record updated');
        alert('Record Updated');
      }
      ,err=>{
        console.log(err);
      })
    }
  Delete(itemid:Number){
   
    this.service.Deleteitems(itemid).subscribe(res=>{
      console.log('Record deleted');
    },
    err=>{
      console.log(err);
    })
  }
  
}
