import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {SubCategory} from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-sub-category',
  templateUrl: './view-sub-category.component.html',
  styleUrls: ['./view-sub-category.component.css']
})
export class ViewSubCategoryComponent implements OnInit {

  itemform:FormGroup;
  item:SubCategory;
  submitted=false;
  list:SubCategory[];

  constructor(private builder:FormBuilder,private service:AdminService) { 
    this.service.ViewSubCategory().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    }, err=>{
      console.log(err);
    }
    )
  }

  ngOnInit() {
    this.itemform=this.builder.group({
    categoryid:['',Validators.required],
    subCategoryid:['',Validators.required],
    subCategoryname:['',Validators.required],
    briefDetails:['',Validators.required],
    gstin:['',Validators.required],
    });
  }
  get f() { return this.itemform.controls; }

  // onSubmit() {
  //     this.submitted = true;
  // }
  onReset() {
      this.submitted = false;
      this.itemform.reset();
  }
  Delete(subCategoryid:number)
 {
    
   this.service.DeleteSubCategory(subCategoryid).subscribe(res=>{
     console.log('record deleted');

 },err=>{
    console.log(err);
 }
  )
} 

}
