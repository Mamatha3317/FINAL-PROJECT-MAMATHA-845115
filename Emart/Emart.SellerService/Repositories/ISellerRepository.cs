using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
  public interface ISellerRepository
    {
         void Editprofile(Seller obj);
         Seller GetProfile(int Sellerid);
    }
}
