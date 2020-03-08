import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Category} from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

itemform:FormGroup;
item:Category;
submitted:false;
list:Category[];
  constructor(private builder:FormBuilder,private service:AdminService) {
    this.service.ViewCategory().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    },err=>{

    }
    )
   }

  ngOnInit() {
    this.itemform=this.builder.group({
      categoryid:['',[Validators.required,Validators.pattern("^[0-9]$")]],
      categoryname:['',Validators.required],
      briefDetails:['',Validators.required],
    })
  }
  get f() { return this.itemform.controls; }

  
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }

 Delete(categoryid:number)
 {
    
   this.service.DeleteCategory(categoryid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}
