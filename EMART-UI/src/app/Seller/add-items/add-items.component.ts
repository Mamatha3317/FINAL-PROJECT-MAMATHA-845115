import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { ItemService } from 'src/app/services/item.service';
import {BuyerService} from 'src/app/services/buyer.service';
import {AdminService} from 'src/app/services/admin.service';
import {from} from 'rxjs';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
additemform:FormGroup;
submitted=false;
item:Item;
list:Item[];
clist:Category[];
sclist:SubCategory[];
imagepath:string;
selectedFile:File=null;
category:Category;

  constructor(private formbuilder:FormBuilder,private route:Router,private services:ItemService,private buyerservices:BuyerService,private adminservices:AdminService) {
  this.buyerservices.GetCategory().subscribe(res=>{
    this.clist=res;
    console.log(this.clist);
  })
 }
  ngOnInit() {
    this.additemform=this.formbuilder.group({
      itemid:['',[Validators.required]],
      categoryid:['',[Validators.required,Validators.pattern("[0-9]$")]],
      subCategoryid:['',[Validators.required,Validators.pattern("[0-9]$")]],
      sellerid:['',[Validators.required,Validators.pattern("[0-9]$")]],
      price:['',[Validators.required,]],
      itemname:['',[Validators.required,]],
      description:['',[Validators.required,]],
      stocknumber:['',[Validators.required,]],
      remarks:['',[Validators.required,]],
      imagepath:['',Validators.required]
      
  });

}
get f(){return this.additemform.controls}
onSubmit()
{
    this.submitted=true;
    alert("success");
    let sellerid=(localStorage.getItem("sellerid"))
    this.item=new Item();
    this.item.itemid=Math.round(Math.random()*1000);
    this.item.categoryid=Number(this.additemform.value["categoryid"]);
    this.item.subCategoryid=Number(this.additemform.value["subCategoryid"]);
    this.item.sellerid=this.additemform.value["sellerid"];
    this.item.price=this.additemform.value["price"];
    this.item.itemname=this.additemform.value["itemname"];
    this.item.description=this.additemform.value["description"];
    this.item.stocknumber=this.additemform.value["stocknumber"];
    this.item.remarks=this.additemform.value["remarks"];
    console.log(this.item);
    this.services.Additem(this.item).subscribe(res=>
      {
        console.log('Items added');
      },err=>{console.log(err)})
    
  }
  GetSubCategory()
 {
    let categoryid=this.additemform.value["categoryid"];
    console.log(categoryid);
    this.buyerservices.GetSubCategory(categoryid).subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
  })
}
fileEvent(event)
{
  this.imagepath=event.target.files[0].name;
}

}