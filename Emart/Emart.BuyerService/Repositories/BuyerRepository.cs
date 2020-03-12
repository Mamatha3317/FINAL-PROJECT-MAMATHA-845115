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
        public void Additem(Transactions obj)
        {
            _context.Transactions.Add(obj);
            _context.SaveChanges();

        }
        public Buyer GetById(int Buyerid)

        {
            return _context.Buyer.Find(Buyerid);
        }
        public void editprofile(Buyer obj)
        {
            _context.Update(obj);
            _context.SaveChanges();

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


        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }

        List<Items> IBuyerRepository.SearchByCategoryId(int Categoryid)
        {
            return _context.Items.Where(e => e.Categoryid == Categoryid).ToList();
        }
        public void AddToCart(Cart obj)
        {
            _context.Cart.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteFromCart(int Cartid)
        {
            Cart c = _context.Cart.Find(Cartid);
            _context.Cart.Remove(c);
            _context.SaveChanges();
        }

        public List<Cart> GetCart(int Buyerid)
        {
            return _context.Cart.Where(e => e.Buyerid == Buyerid).ToList();
        }
    }
}

