import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
sellerregisterform:FormGroup;
submitted=false;
sid:number;
sname:string;
createddatetime:Date;
semail:string;
smobile:number;
password:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
      sid:['',[Validators.required,Validators.pattern("[0-9]{4}$")]],
      sname:['',[Validators.required,Validators.pattern("[A-Z]{5,12}$")]],
      createddatetime:['',Validators.required],
      semail:['',[Validators.required,Validators.email]],
      smobile:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[~,!,@,#,$,%,^,&,*]")]],     
    })
  }
   get f(){return this.sellerregisterform.controls}
   onSubmit()
   {
     this.submitted=true;
     if(this.sellerregisterform.valid)
     {
       alert("success")
       console.log(JSON.stringify(this.sellerregisterform.value))
     }
   }
}
