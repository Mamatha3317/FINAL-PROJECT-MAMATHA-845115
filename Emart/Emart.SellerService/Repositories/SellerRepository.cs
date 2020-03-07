using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
        

        public void Editprofile(Seller obj)
        {
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

        public Seller GetProfile(int Sid)
        {
            return _context.Seller.Find(Sid);
        }

        
    }
}
