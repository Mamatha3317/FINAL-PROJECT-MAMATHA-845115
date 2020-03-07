import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Seller } from 'src/app/Models/seller';
import {UserService} from 'src/app/services/user.service';


@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
sellerregisterform:FormGroup;
submitted=false;
seller:Seller;
list:Seller[];
  constructor(private formbuilder:FormBuilder,private route:Router,private services:UserService) { }

  ngOnInit() {
    this.sellerregisterform=this.formbuilder.group({
      Sellerid:['',[Validators.required,Validators.pattern("[0-9]$")]],
      Sellername:['',[Validators.required]],
      Companyname:['',[Validators.required]],
      BriefAboutCompany:['',[Validators.required]],
      PostalAddress:['',[Validators.required]],
      Website:['',[Validators.required]],
      Gstin:['',[Validators.required]],
      Sellermail:['',[Validators.required,Validators.email]],
      Sellermobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      Sellerpassword:['',[Validators.required]],     
    })
  }
   get f(){return this.sellerregisterform.controls}
   onSubmit()
   {
     this.submitted=true;
     this.seller=new Seller();
     this.seller.Sellerid=Number(this.sellerregisterform.value["Sellerid"]);
     this.seller.Sellername=this.sellerregisterform.value["Sellername"];
     this.seller.Companyname=this.sellerregisterform.value["Companyname"];
     this.seller.BriefAboutCompany=this.sellerregisterform.value["BriefAboutCompany"];
     this.seller.PostalAddress=this.sellerregisterform.value["PostalAddress"];
     this.seller.Website=this.sellerregisterform.value["Website"];
     this.seller.Gstin=this.sellerregisterform.value["Gstin"];
     this.seller.Sellermail=this.sellerregisterform.value["Sellermail"];
     this.seller.Sellermobile=this.sellerregisterform.value["Sellermobile"];
     this.seller.Sellerpassword=this.sellerregisterform.value["Sellerpassword"];
     console.log(this.seller)
      this.services.SellerRegister(this.seller).subscribe(res=>
        {
          console.log('succesfully registered');
        },err=>{console.log(err)}
      )
     
       alert("success")
       console.log(JSON.stringify(this.sellerregisterform.value))
     
   }
}