import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { SellerService } from 'src/app/services/seller.service';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  viewprofileform:FormGroup;
  submitted=false;
  seller:Seller;
  list:Seller[];
  
  constructor(private formbuilder:FormBuilder,private route:Router,private services:SellerService) { }

  ngOnInit() {
    this.viewprofileform=this.formbuilder.group({
      sellerid:[''],
      sellername:[''],
      companyname:[''],
      briefAboutCompany:[''],
      postalAddress:[''],
      sellermobile:[''],
      sellermail:[''],
    });
    this.viewprofile();
  }
  viewprofile()
  {
    // let Sellerid=Number(localStorage.getItem('Sellerid'));
    // console.log(Sellerid);
       this.services.GetProfile(1).subscribe(res=>{
         this.seller=res;
      console.log(this.seller);
      this.viewprofileform.setValue({
       sellerid:this.seller.sellerid,
        sellername:this.seller.sellername,
        companyname:this.seller.companyname,
        briefAboutCompany:this.seller.briefAboutCompany,
        postalAddress:this.seller.postalAddress,
        sellermobile:this.seller.sellermobile,
        sellermail:this.seller.sellermail,
        
      })
    });
  }
  get f(){return this.viewprofileform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
     if(this.viewprofileform.valid)
     {
    this.seller.sellerid=Number(this.viewprofileform.value["sellerid"]);
      this.seller.sellername=this.viewprofileform.value["sellername"];
      this.seller.companyname=this.viewprofileform.value["companyname"];
      this.seller.briefAboutCompany=this.viewprofileform.value["briefAboutCompany"];
      this.seller.postalAddress=this.viewprofileform.value["postalAddress"];
      this.seller.sellermobile=this.viewprofileform.value["sellermobile"];
      this.seller.sellermail=this.viewprofileform.value["sellermail"];
      console.log(this.seller)
      this.services.Editprofile(this.seller).subscribe(res=>{
        this.seller=res;
        console.log(this.seller)
console.log('Edited Successfully');
      },err=>{console.log(err)}
      )
      alert("Success");
      this.route.navigateByUrl('home/login');
      
    }
    // else
    // this.route.navigateByUrl('register-seller');

  }
}
  