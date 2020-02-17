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
logiform:FormGroup;
uname:string;
pwd:string;
submitted=true;
errmsg:string;
  constructor(private formbuilder:FormBuilder,private route:Router ) { }

  ngOnInit() {
  }
  public validate()
  {
    if(this.uname=="buyer"&& this.pwd=="buyer")
    {
           
            
            sessionStorage.setItem('un',this.uname)
              this.route.navigateByUrl('buyer-landing-page'); 
            
          
         
    }
  
   else if(this.uname=="seller"&& this.pwd=="seller")
   {
          
          sessionStorage.setItem('un',this.uname)
            this.route.navigateByUrl('seller-landing-page'); 
   }
        
        else
        {
          this.errmsg="invalid credentials";
        }
   }
  
      
     
}
  

