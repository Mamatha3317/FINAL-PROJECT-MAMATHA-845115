import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';
import { UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
buyerregisterform:FormGroup;
submitted=false;
buyer:Buyer;
list:Buyer[];
  constructor(private formbuilder:FormBuilder,private route:Router,private services:UserService) { }

  ngOnInit() {
    this.buyerregisterform=this.formbuilder.group({
     buyerid:['',[Validators.required,Validators.pattern("[0-9]$")]],
     buyername:['',[Validators.required]],
     createddatetime:['',Validators.required],
     buyermail:['',[Validators.required,Validators.email]],
     buyerno:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
     buyerpassword:['',[Validators.required]],
    })
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted=true;
    this.buyer=new Buyer();
    this.buyer.buyerid=Number(this.buyerregisterform.value["buyerid"]);
     this.buyer.buyername=this.buyerregisterform.value["buyername"];
     this.buyer.createddatetime=this.buyerregisterform.value["createdatetime"];
     this.buyer.buyermail=this.buyerregisterform.value["buyermail"];
     this.buyer.buyerno=this.buyerregisterform.value["buyerno"];
     this.buyer.buyerpassword=this.buyerregisterform.value["buyerpassword"];
     console.log(this.buyer)
     this.services.BuyerRegister(this.buyer).subscribe(res=>
       {
         console.log('succesfully registered');
       },err=>{console.log(err)}
     )
    
      alert("success")
      console.log(JSON.stringify(this.buyerregisterform.value))
    
  }
  

}
