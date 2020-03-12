import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Item } from '../Models/item';
import {Observable} from 'rxjs';
import { stringify } from 'querystring';
import { SubCategory } from '../Models/sub-category';
import {Category} from '../Models/category';

const Requestheaders={headers:new HttpHeaders({
  'content-type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')

})}
@Injectable({
  providedIn: 'root'
})
export class ItemService {
url:string='http://localhost:60952/Item/'
  constructor(private http:HttpClient) { }
  public Additem(item:Item):Observable<any>
  {
    return this.http.post<Item>(this.url+'Additem',JSON.stringify(item),Requestheaders);
  }
  public Getitems(itemid:Number):Observable<Item>
  {
    return this.http.get<Item>(this.url+'Getitems/'+itemid,Requestheaders);
  }
  public Viewitems(sellerid:Number):Observable<any>
  {
    return this.http.get<Item>(this.url+'Viewitems/'+sellerid,Requestheaders);
  }
  public Deleteitems(itemid:Number):Observable<any>
  {
    return this.http.delete<any>(this.url+'Deleteitems/'+itemid,Requestheaders);
  }
  public Updateitem(item:Item):Observable<Item>
  {
    return this.http.put<Item>(this.url+'Updateitem/',JSON.stringify(item),Requestheaders);
  }
  public GetAllItems():Observable<Item[]>
   {
     return this.http.get<Item[]>(this.url+'GetAllItems',Requestheaders);
   }
   public GetCategory():Observable<any>
   {
     return this.http.get<Category>(this.url+'GetCategory',Requestheaders);
   }
 public GetSubCategory(categoryid:number):Observable<any>
   {
     return this.http.get<any>(this.url+'GetSubCategory/'+categoryid,Requestheaders);
   }
}
