import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { BuyerService } from 'src/app/services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  buyerregisterform:FormGroup;
  submitted=false;
  buyer:Buyer;
 list:Buyer[];
  constructor(private formbuilder:FormBuilder,private route:Router,private services:BuyerService) {
  //   if(localStorage.getItem("Sellerid")==null)
  //   {
  //     this.route.navigateByUrl('/home/login');

  //   }

    }
 
  ngOnInit() {
    this.buyerregisterform=this.formbuilder.group({
      buyerid:[''],
      buyername:[''],
      buyerno:[''],
      buyermail:[''],
    });
    this.viewprofile();
  }
  viewprofile()
  {
    let buyerid=Number(localStorage.getItem("buyerid"))
      this.services.getprofile(buyerid).subscribe(res=>{
      console.log(res);
      this.buyer=res;
      this.buyerregisterform.setValue({
        buyerid:this.buyer.buyerid,
        buyername:this.buyer.buyername,
        buyermail:this.buyer.buyermail,
        buyerno:this.buyer.buyerno,



      });
      
    });


  }
  get f(){return this.buyerregisterform.controls;}
  
  onSubmit()
  {

    let buyerid=Number(localStorage.getItem("buyerid"));
      this.buyer.buyername=this.buyerregisterform.value["buyername"];
      this.buyer.buyermail=this.buyerregisterform.value["buyermail"];
      this.buyer.buyerno=this.buyerregisterform.value["buyerno"];


      console.log(this.buyer)
      this.services.editprofile(this.buyer).subscribe(res=>
        {

          console.log('Edited succesfully');
        },err=>{console.log(err)}
  
        )
          alert('Success')
  }
}    
     

