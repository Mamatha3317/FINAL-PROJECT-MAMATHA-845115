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
      sellerid:['',[Validators.required,Validators.pattern("[0-9]$")]],
      sellername:['',[Validators.required]],
      companyname:['',[Validators.required]],
      briefAboutCompany:['',[Validators.required]],
      postalAddress:['',[Validators.required]],
      Website:['',[Validators.required]],
      gstin:['',[Validators.required]],
      sellermail:['',[Validators.required,Validators.email]],
      sellermobile:['',[Validators.required,Validators.pattern("[0-9]{10}$")]],
      sellerpassword:['',[Validators.required]],     
    })
  }
   get f(){return this.sellerregisterform.controls}
   onSubmit()
   {
     this.submitted=true;
     this.seller=new Seller();
     this.seller.sellerid=Number(this.sellerregisterform.value["sellerid"]);
     this.seller.sellername=this.sellerregisterform.value["sellername"];
     this.seller.companyname=this.sellerregisterform.value["companyname"];
     this.seller.briefAboutCompany=this.sellerregisterform.value["briefAboutCompany"];
     this.seller.postalAddress=this.sellerregisterform.value["postalAddress"];
     this.seller.Website=this.sellerregisterform.value["Website"];
     this.seller.gstin=this.sellerregisterform.value["gstin"];
     this.seller.sellermail=this.sellerregisterform.value["sellermail"];
     this.seller.sellermobile=this.sellerregisterform.value["sellermobile"];
     this.seller.sellerpassword=this.sellerregisterform.value["sellerpassword"];
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