import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {Buyer} from 'src/app/Models/buyer';
import { Seller} from 'src/app/Models/seller';
import {Token} from 'src/app/Models/token'
import {UserService} from 'src/app/services/user.service';
import { AdminLandingPageComponent } from 'src/app/Admin/admin-landing-page/admin-landing-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  
  name:string;
  pwd:string;
  token:Token;
  buyer:Buyer;
  seller:Seller;
  role:string;
   submitted=false;
   errormessage:string;
   constructor(private formbuilder:FormBuilder,private route:Router,private services:UserService) {
    
    }
 
   ngOnInit() {
   this.loginform=this.formbuilder.group({
     name:[''],
     pwd:[''],
     role:['']
   });
   }
   Validate()
{
  
  this.buyer=new Buyer();
  this.seller=new Seller();
  let name=this.loginform.value['name'];
  let pwd=this.loginform.value['pwd'];
  let role=this.loginform.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
  {
    let token=new Token();
  this.services.BLogin(name,pwd).subscribe(res=>{token=res;console.log(token)
    console.log(name,pwd);
    console.log(res);
    if(token.message=="success")
    {
      localStorage.setItem('token',token.token)
    localStorage.setItem("buyerid",token.buyerid.toString());

      this.route.navigateByUrl("buyer-landing-page")
    }
    else{
      alert("invalid");
    }
  });
  }
  
else if(role=='seller')
{
 let token=new Token();
this.services.SLogin(name,pwd).subscribe(res=>{token=res;console.log(token)
  console.log(name,pwd);
  console.log(res);
  if(token.message=="success")
  {
    localStorage.setItem('token',token.token)
    localStorage.setItem("Sellerid",String(token.Sellerid));

    // localStorage.setItem("username",this.seller.username);
    // localStorage.setItem("password",this.seller.password);
    this.route.navigateByUrl("seller-landing-page")
  }
  else{
    alert("invalid");
  }
});
}
  if(name=='admin' && pwd=='admin')
  {
    
    this.route.navigateByUrl("admin-landing-page");
    
  }

}
}
    

