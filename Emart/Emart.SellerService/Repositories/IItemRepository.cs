using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {
        void Deleteitems(int Itemid);
        void Additem(Items obj);
        Items GetItems(int Itemid);
        void Updateitem(Items obj);
        List<Items> Viewitems(int Itemid);
        List<Items> GetAllItems();
    }
}
