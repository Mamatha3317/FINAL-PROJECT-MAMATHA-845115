using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;

namespace Emart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> searchitems(string Itemname);
        Buyer GetById(int Buyerid);
        void Additem(Transactions obj);
        void editprofile(Buyer obj);
        Buyer getprofile(int Buyerid);
        List<Transactions> transactionshistory(int Buyerid);
        
        List<Items> GetAllItems();
        List<Items> SearchByCategoryId(int Categoryid);
        void AddToCart(Cart obj);
        void DeleteFromCart(int Cartid);
        List<Cart> GetCart(int Buyerid);






    }
}