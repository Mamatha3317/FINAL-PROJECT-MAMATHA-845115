import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import {Buyer} from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
import {Category} from 'src/app/Models/category';

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
  public editprofile(item:Buyer):Observable<any>
    {
      return this.http.put<any>(this.url+'editprofile',JSON.stringify(Buyer),Requestheaders)
    }
    public getprofile(buyerid:number):Observable<any>
  {
    return this.http.get<any>(this.url+'getprofile/'+buyerid,Requestheaders);
  }

    public GetDetails():Observable<any>
    {
      return this.http.get<Seller>(this.url+'GetAllItems')
    }
    public GetCategory():Observable<any>
    {
      return this.http.get<any>(this.url+'GetCategory'+Requestheaders);
    }
    public GetSubCategory(Categoryid:number):Observable<any>
    {
      return this.http.get<any>(this.url+'GetSubCategory/'+Categoryid,Requestheaders);
    }
    public searchitems(itemname:string):Observable<any>
    {
      return this.http.get<any>(this.url+'searchitems/'+itemname,Requestheaders);
    }
  }
