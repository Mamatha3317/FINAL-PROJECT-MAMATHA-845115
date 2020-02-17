import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
buyerregisterform:FormGroup;
submitted=false;
bid:number;
bname:string;
createddatetime:Date;
bemail:string;
bmobile:number;
password:string;
  constructor(private formbuilder:FormBuilder,private route:Router) { }

  ngOnInit() {
    this.buyerregisterform=this.formbuilder.group({
     bid:['',[Validators.required,Validators.pattern("^[0-9]{4}$")]],
     bname:['',[Validators.required,Validators.pattern("[A-Z]{5,12}$")]],
     createddatetime:['',Validators.required],
     bemail:['',[Validators.required,Validators.email]],
     bmobile:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
     password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted=true;
    if(this.buyerregisterform.valid)
    {
      alert("success")
      console.log(JSON.stringify(this.buyerregisterform.value));
    }
  }

}
