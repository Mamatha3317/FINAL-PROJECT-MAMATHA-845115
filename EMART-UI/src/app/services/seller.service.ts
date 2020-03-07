import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Seller } from '../Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')

})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:60952/Seller/'
  constructor(private http:HttpClient) { }
  public EditProfile(seller:Seller):Observable<any>
  {
    return this.http.put<Seller>(this.url+'Editprofile/',JSON.stringify(seller),Requestheaders);
  }
  public getprofile(sid:number):Observable<Seller>
  {
    return this.http.get<Seller>(this.url+'getprofile/'+sid,Requestheaders);
  }
}
