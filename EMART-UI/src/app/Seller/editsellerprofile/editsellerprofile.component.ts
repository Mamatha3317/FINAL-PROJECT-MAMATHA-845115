import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { Seller } from 'src/app/Models/seller';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-editsellerprofile',
  templateUrl: './editsellerprofile.component.html',
  styleUrls: ['./editsellerprofile.component.css']
})
export class EditsellerprofileComponent implements OnInit {

    sellerregisterform:FormGroup;
    submitted=false;
    seller:Seller;
   
    constructor(private formbuilder:FormBuilder,private route:Router,private services:SellerService) { }
  
    ngOnInit() {
      this.sellerregisterform=this.formbuilder.group({
        sellerid:['',[Validators.required]],
        sellername:['',[Validators.required]],
        companyname:['',Validators.required],
        briefAboutCompany:['',Validators.required],
        postalAddress:['',Validators.required],
        gstin:['',Validators.required],
        sellermobile:['',[Validators.required, Validators.pattern("^[0-9]{10}$")]],
        sellermail:['',[Validators.required,Validators.email]],
        sellerpassword:['',[Validators.required]],
      })
    }
    get f(){return this.sellerregisterform.controls;}
    onSubmit()
    {
      this.submitted= true;
      if(this.sellerregisterform.valid)
      {
        this.seller.sellerid=Number(this.sellerregisterform.value["sellerid"]);
        this.seller.sellername=this.sellerregisterform.value["sellername"];
        this.seller.sellermail=this.sellerregisterform.value["sellermail"];
        this.seller.sellermobile=this.sellerregisterform.value["sellermobile"];
        this.seller.sellerpassword=this.sellerregisterform.value["sellerpassword"];
        this.seller.companyname=this.sellerregisterform.value["companyname"];
        this.seller.briefAboutCompany=this.sellerregisterform.value["briefAboutCompany"];
        this.seller.postalAddress=this.sellerregisterform.value["postalAddress"];
        this.seller.gstin=this.sellerregisterform.value["gstin"];
        this.seller.Website=this.sellerregisterform.value["Website"];
        this.seller.createdDate=this.sellerregisterform.value["createdDate"];
  
        console.log(this.seller)
        this.services.Editprofile(this.seller).subscribe(res=>
          {
            console.log('Edited succesfully');
          },err=>{console.log(err)}
    
          )
  
    //display form value on success
    
  
      alert("Success");
      // this.route.navigateByUrl('home/login');
      
      //   }
      //   else
      //   this.route.navigateByUrl('register-seller');
        
      }
    }
}