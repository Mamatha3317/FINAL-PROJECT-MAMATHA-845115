import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  list:PurchaseHistory[];
  constructor(private service:BuyerService,private route:Router) {
    let buyerid=Number(localStorage.getItem("buyerid"));
    this.service.PurchaseHistory(buyerid).subscribe(res=>{
      this.list=res;
      console.log(this.list);


    })
    if(localStorage.getItem("buyerid"))
    {
      

    }
  else {
    this.route.navigateByUrl('/home/login');
  }
   }

  ngOnInit() {
  }

}
