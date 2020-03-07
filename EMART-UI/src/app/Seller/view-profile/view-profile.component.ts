import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  viewprofileform:FormGroup;
  submitted=false;
  Sellerid:string;
  Sellername:string;
  CreatedDate:Date;
  Sellermobile:number;
  Sellermail:string;
  Sellerpassword:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.viewprofileform=this.formbuilder.group({
      Sellerid:['',[Validators.required]],
      Sellername:['',[Validators.required]],
      CreatedDate:['',Validators.required],
      Sellermobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      Sellermail:['',[Validators.required,Validators.email]],
      Sellerpassword:['',[Validators.required]],
    })
  }
  get f(){return this.viewprofileform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.viewprofileform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.viewprofileform.value));
      
    }

  }
}
  