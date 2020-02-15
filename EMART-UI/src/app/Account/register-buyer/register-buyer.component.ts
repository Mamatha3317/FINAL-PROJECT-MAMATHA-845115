import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-registerbuyer',
  templateUrl: './registerbuyer.component.html',
  styleUrls: ['./registerbuyer.component.css']
})
export class RegisterbuyerComponent implements OnInit {
  buyerregisterform:FormGroup;
  submitted=false;
  id:string;
  name:string;
  createddatetime:Date;
  mobile:number;
  mail:string;
  password:string;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit()
   {
    this.buyerregisterform=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern("^[E][0-9]{4}$")]],
      name:['',[Validators.required,Validators.pattern("^[A-Z]{5,10}$")]],
      createddatetime:['',Validators.required],
       mobile:['',[Validators.required,
              Validators.pattern("^[6-9][0-9]{9}$")]],
      mail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("^[A-Z]{7}[@,#,$,%,&,*]$")]],
    })
  }
  get f(){return this.buyerregisterform.controls;}
  onSubmit()
  {
    this.submitted= true;
    //display form value on success
    if(this.buyerregisterform.valid)
    {
      alert("Success")
      console.log(JSON.stringify(this.buyerregisterform.value));
      
    }

  }

}
