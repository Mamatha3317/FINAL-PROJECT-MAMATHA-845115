import { Component, OnInit } from '@angular/core';
import { Item} from 'src/app/Models/item';
import { BuyerService } from 'src/app/services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  list:Item[];

  constructor(private service:BuyerService,private route:Router) { 
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
  }
  

  ngOnInit() {
  }  
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  }
