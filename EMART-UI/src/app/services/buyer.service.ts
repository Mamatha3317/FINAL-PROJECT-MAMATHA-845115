import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import {Buyer} from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
import {Category} from 'src/app/Models/category';
import { cart } from '../Models/cart';

const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')

})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:60952/Buyer/'
  constructor(private http:HttpClient) {}
   
  // public Additem(Transactions:transactionHistory):Observable<any>
  // {
  //   return this.http.post<any>(this.url+'Additem',JSON.stringify(Transactions),Requestheaders);
  // }
  public editprofile(item:Buyer):Observable<any>
    {
      return this.http.put<Buyer>(this.url+'editprofile',JSON.stringify(item),Requestheaders)
    }
  public getprofile(buyerid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'getprofile/'+buyerid,Requestheaders);
    } 
  
  public searchitems(itemname:string):Observable<any>
    {
      return this.http.get<any>(this.url+'searchitems/'+itemname,Requestheaders);
    }
  public GetAllItems():Observable<any>
  {
    return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
  }
  public SearchByCategoryId(Categoryid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'SearchByCategoryId/'+Categoryid,Requestheaders);
  }
  
  public TransactionHistory(buyerid:number):Observable<any>
  {
    return this.http.post<any>(this.url+'TransactionHistory/'+buyerid,Requestheaders);
  }
  
  
  public AddToCart(cart:cart):Observable<any>
  {
    return this.http.post<any>(this.url+'AddToCart',JSON.stringify(cart),Requestheaders)
  }
  public DeleteFromCart(cartid:number):Observable<cart>
  {
    return this.http.delete<cart>(this.url+'Deletefromcart/'+cartid,Requestheaders)
  }
  public GetCart(buyerid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'GetCart/'+buyerid,Requestheaders)
  }

 
  }
