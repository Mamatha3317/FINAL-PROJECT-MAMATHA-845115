using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;

namespace Emart.SellerService.Repositories
{

    public class ItemRepository:IItemRepository
    {
        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void Deleteitems(int Itemid)
        {
            Items i = _context.Items.Find(Itemid);
            _context.Remove(i);
            _context.SaveChanges();
        }
        public void Additem(Items obj)
        {
            _context.Items.Add(obj);
            _context.SaveChanges();
        }

        public Items GetItems(int Itemid)
        {
            return _context.Items.Find(Itemid);
        }

        public void Updateitem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }
        public List<Items> Viewitems(int Sellerid)
        {
            return _context.Items.ToList();
        }
        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }
        public List<Category> GetCategory()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategory(int Categoryid)
        {
            List<SubCategory> SubCategory = _context.SubCategory.Where(e => e.Categoryid == Categoryid).ToList();
            return SubCategory;
        }

    }
}
