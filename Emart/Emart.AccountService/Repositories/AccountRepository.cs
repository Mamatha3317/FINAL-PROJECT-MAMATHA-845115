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


        public bool BuyerLogin(string uname, string pwd)
        {
            var x = _context.Buyer.SingleOrDefault(e => e.Bname == uname && e.Bpwd == pwd);
            if(x!=null)
            {
                return true;
            }
            else
            {
                return false;
            }
                
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

        public bool SellerLogin(string uname, string pwd)
        {
            var x = _context.Seller.Where(e => e.Sname == uname && e.Spwd == pwd).ToList();
                if(x.Count!=0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void SellerRegister(Seller obj)
        {
            _context.Seller.Add(obj);
            _context.SaveChanges();
        }
    }
}
