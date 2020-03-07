import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import {SubCategory} from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/Services/admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  addsubcategoryform:FormGroup;
  submitted=false;
  list1:SubCategory[];
  subcategory:SubCategory;
 
  constructor(private formbuilder:FormBuilder,private route:Router,private service:AdminService) 
  { }
  

  ngOnInit() {
    this.addsubcategoryform=this.formbuilder.group({
      SubCategoryid:['',Validators.required],
      SubCategoryname:['',Validators.required],
      Categoryid:['',Validators.required],
      GSTIN:['',Validators.required],
      Briefdetails:['',Validators.required],
    });
  }
  get f(){return this.addsubcategoryform.controls;}
  onSubmit()
  {
    this.submitted= true;

    //display form value on success
    this.subcategory=new SubCategory();
    this.subcategory.SubCategoryid=Math.round(Math.random()*1000);
   this.subcategory.Categoryid=Number(this.addsubcategoryform.value["Categoryid"]);
   this.subcategory.SubCategoryname=this.addsubcategoryform.value["SubCategoryname"];
   this.subcategory.GSTIN=this.addsubcategoryform.value["GSTIN"];
   this.subcategory.Briefdetails=this.addsubcategoryform.value["Briefdetails"];
   
   console.log(this.subcategory)
   this.service.AddSubCategory(this.subcategory).subscribe(res=>{
     console.log('Added Successfully');

   },err=>{console.log(err)}
   )

      alert("Success")
      console.log(JSON.stringify(this.addsubcategoryform.value));
      

  }
}

