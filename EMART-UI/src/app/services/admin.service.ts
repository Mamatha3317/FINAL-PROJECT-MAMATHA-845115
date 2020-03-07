import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import {Category} from '../Models/category';
import {SubCategory} from '../Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
  'Authorization': 'Bearer '+localStorage.getItem('token')
})}


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url:string='http://localhost:60952/Admin/'
  constructor(private http:HttpClient) {}
  public AddCategory(category:Category):Observable<any>
    {
      return this.http.post(this.url+'AddCategory/',JSON.stringify(category),Requestheaders)
    }
  public DeleteCategory(Categoryid:Number):Observable<Category>
    {
    return this.http.delete<Category>(this.url+'DeleteCategory/'+Categoryid,Requestheaders);
    }
  public GetCategory():Observable<Category[]>
    {
      return this.http.get<Category[]>(this.url+'GetCategory')
    }
  public AddSubCategory(subcategory:SubCategory):Observable<any>
    {
      return this.http.post(this.url+'AddSubCategory/',JSON.stringify(subcategory),Requestheaders)
    }
    
  public DeleteSubCategory(SubCategoryid:Number):Observable<SubCategory>
  {
    return this.http.delete<SubCategory>(this.url+'DeleteSubCategory/'+SubCategoryid,Requestheaders);
  }
  public GetSubCategory():Observable<any>
   {
     return this.http.get<any>(this.url+'GetSubCategory');
   }
}

