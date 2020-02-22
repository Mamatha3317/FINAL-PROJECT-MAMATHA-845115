import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {Buyer} from 'src/app/Models/buyer';
import { Seller} from 'src/app/Models/seller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  
  name:string;
  pwd:string;
  
   submitted=true;
   errormessage:string;
   constructor(private formbuilder:FormBuilder,private route:Router) {
    
    }
 
   ngOnInit() {
   
   }
   public validate()
   {
     if(this.name=="buyer"&& this.pwd=="buyer")
     {
            
             
             sessionStorage.setItem('un',this.name)
               this.route.navigateByUrl('buyer-landing-page'); 
             
           
          
     }
   
    else if(this.name=="seller"&& this.pwd=="seller")
    {
           
           sessionStorage.setItem('un',this.name)
             this.route.navigateByUrl('seller-landing-page');
    }
         
         else
         {
           this.errormessage="invalid credentials";
         }
    }
   
       
      
 }