import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingPageComponent } from './Admin/admin-landing-page/admin-landing-page.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { DailyReportComponent } from './Admin/daily-report/daily-report.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewProfileComponent } from './Seller/view-profile/view-profile.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import {  RegisterbuyerComponent } from './Account/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Account/register-seller/register-seller.component';
import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './Account/home/home.component';


const routes: Routes = [
   {path:'adminlandingpage',component:AdminLandingPageComponent,children:
  [{path:'addcategory',component:AddCategoryComponent},
  {path:'addsubcategory',component:AddSubCategoryComponent},
{path:'blockunblockbuyer',component:BlockUnblockBuyerComponent},
{path:'dailyreport',component:DailyReportComponent},
{path:'blockunblockseller',component:BlockUnblockSellerComponent}
]},
{path:'buyerlandingpage',component:BuyerLandingPageComponent,children:[
  {path:'buyproduct',component:BuyProductComponent},
  {path:'purchasehistory',component:PurchaseHistoryComponent},
  {path:'search',component:SearchComponent},
  {path:'viewcart',component:ViewCartComponent}
]},
{path:'sellerlandingpage',component:SellerLandingPageComponent,children:[
  {path:'additems',component:AddItemsComponent},
  {path:'viewitems',component:ViewItemsComponent},
  {path:'viewprofile',component:ViewProfileComponent},
  {path:'viewreports',component:ViewReportsComponent}
]},
{path:'Home',component:HomeComponent,children:[
{path:'registerbuyer',component:RegisterbuyerComponent},
{path:'registerseller',component:RegisterSellerComponent},
{path:'login',component:LoginComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
