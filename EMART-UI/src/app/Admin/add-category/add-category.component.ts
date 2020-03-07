import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {from} from 'rxjs';
import {AdminService} from 'src/app/services/admin.service';
import { Category } from 'src/app/Models/category';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addcategoryform:FormGroup;
  submitted=false;
  category:Category;
  list:Category[];

  constructor(private formbuilder:FormBuilder,private route:Router, private services:AdminService) { }

  ngOnInit() {
    this.addcategoryform=this.formbuilder.group({
       Categoryid:['',Validators.required],
       Categoryname:['',Validators.required],
       Briefdetails:['',Validators.required],
    });
  }
  get f(){return this.addcategoryform.controls;}
  onSubmit()
  {
    
    this.submitted=true;
    this.category=new Category();
    this.category.Categoryid=Math.round(Math.random()*1000);
    this.category.Categoryname=(this.addcategoryform.value["Categoryname"]);
    this.category.Briefdetails=(this.addcategoryform.value["Briefdetails"]);
    console.log(this.category);
    this.services.AddCategory(this.category).subscribe(res=>
      {
        console.log('Added Successfully');
 
      },err=>{console.log(err)}
    )
    alert("Success")
    //display form value on success
    console.log(JSON.stringify(this.addcategoryform.value));
    // this.route.navigateByUrl('admin-landing-page');

    
  }
}
