using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;

namespace Emart.AccountService.Repositories
{
   public interface IAccountRepository
    {
       

        bool BuyerLogin(string uname, string pwd);
        bool SellerLogin(string uname, string pwd);
        void SellerRegister(Seller obj);
        void BuyerRegister(Buyer obj);
       
    }
}
