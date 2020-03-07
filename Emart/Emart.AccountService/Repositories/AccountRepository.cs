using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AccountService.Models;

namespace Emart.AccountService.Repositories
{
    public class AccountRepository : IAccountRepository
    {
        private readonly EmartDBContext _context;
        public AccountRepository(EmartDBContext context)
        {
            _context = context;
        }


        public Buyer BuyerLogin(string uname, string pwd)
        {
            return _context.Buyer.SingleOrDefault(e => e.Buyername == uname && e.Buyerpassword == pwd);
           
                
        }

        public void BuyerRegister(Buyer obj)
        {
            _context.Buyer.Add(obj);
            _context.SaveChanges();
        }
        public Buyer GetById(int id)
        {
            return _context.Buyer.Find(id);
        }

        public Seller SellerLogin(string uname, string pwd)
        {
            return _context.Seller.SingleOrDefault(e => e.Sellername == uname && e.Sellerpassword == pwd);

        }

        public void SellerRegister(Seller obj)
        {
            _context.Seller.Add(obj);
            _context.SaveChanges();
        }
    }
}
