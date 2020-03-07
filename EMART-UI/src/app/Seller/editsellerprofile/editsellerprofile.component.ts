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
        Sellerid:['',[Validators.required]],
        Sellername:['',[Validators.required]],
        Companyname:['',Validators.required],
        BriefAboutCompany:['',Validators.required],
        PostalAddress:['',Validators.required],
        Gstin:['',Validators.required],
        Sellermobile:['',[Validators.required, Validators.pattern("^[0-9]{10}$")]],
        Sellermail:['',[Validators.required,Validators.email]],
        Sellerpassword:['',[Validators.required]],
      })
    }
    get f(){return this.sellerregisterform.controls;}
    onSubmit()
    {
      this.submitted= true;
      if(this.sellerregisterform.valid)
      {
        this.seller.Sellerid=Number(this.sellerregisterform.value["Sellerid"]);
        this.seller.Sellername=this.sellerregisterform.value["Sellername"];
        this.seller.Sellermail=this.sellerregisterform.value["Sellermail"];
        this.seller.Sellermobile=this.sellerregisterform.value["Sellermobile"];
        this.seller.Sellerpassword=this.sellerregisterform.value["Sellerpassword"];
        this.seller.Companyname=this.sellerregisterform.value["companyname"];
        this.seller.BriefAboutCompany=this.sellerregisterform.value["BriefAboutCompany"];
        this.seller.PostalAddress=this.sellerregisterform.value["PostalAddress"];
        this.seller.Gstin=this.sellerregisterform.value["Gstin"];
        this.seller.Website=this.sellerregisterform.value["Website"];
        this.seller.CreatedDate=this.sellerregisterform.value["CreatedDate"];
  
        console.log(this.seller)
        this.services.EditProfile(this.seller).subscribe(res=>
          {
            console.log('Edited succesfully');
          },err=>{console.log(err)}
    
          )
  
    //display form value on success
    
  
      alert("Success");
      this.route.navigateByUrl('home/login');
      
        }
        else
        this.route.navigateByUrl('register-seller');
        
      }
    }
  