using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository:IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;

        }
        public void buyitem(Transactions obj)
        {
            _context.Transactions.Add(obj);
            _context.SaveChanges();

        }

        public void editprofile(Buyer obj)
        {
            _context.Update(obj);
            _context.SaveChanges();

        }

        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }

        public Buyer getprofile(int Buyerid)
        {
            return _context.Buyer.Find(Buyerid);
        }

       

        public List<Items> searchitems(string Itemname)
        {
            return _context.Items.Where(e => e.Itemname == Itemname).ToList();
        }

        public List<Transactions> transactionshistory(int Buyerid)
        {
            return _context.Transactions.Where(e => e.Buyerid == Buyerid).ToList();
        }

        List<SubCategory> IBuyerRepository.GetSubcategory(int Categoryid)
        {
            return _context.SubCategory.Where(e => e.Categoryid == Categoryid).ToList();
        }
    }
}

