import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Buyer} from '../Models/buyer';
import {Seller} from '../Models/seller';
import { stringify } from 'querystring';

const Requestheaders={headers:new HttpHeaders({
   'content-type':'application/json',
   'Authorization': 'Bearer '+localStorage.getItem('token')

})}
@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string='http://localhost:60952/Account/'
  constructor(private http:HttpClient) { }
  public BLogin(Bname:string,Bpwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'BLogin/'+Bname+'/'+Bpwd,Requestheaders)
  }
  public SLogin(Sname:string,Spwd:string):Observable<any>
  {
    return this.http.get<any>(this.url+'SLogin/'+Sname+'/'+Spwd,Requestheaders)
  }
  public BuyerRegister(Buyer:Buyer):Observable<any>
  {
    return this.http.post<Buyer>(this.url+'BuyerRegister',JSON.stringify(Buyer),Requestheaders)
  }
  public SellerRegister(Seller:Seller):Observable<any>
  {
    return this.http.post<Seller>(this.url+'SellerRegister',JSON.stringify(Seller),Requestheaders)
  }
}

