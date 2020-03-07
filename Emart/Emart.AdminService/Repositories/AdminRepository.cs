using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Category.Add(obj);
            _context.SaveChanges();

        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.SubCategory.Add(obj);
            _context.SaveChanges();

        }

        

        public SubCategory getby(int SubCategoryid)
        {
            return _context.SubCategory.Find(SubCategoryid);
        }

        public Category getbyid(int Categoryid)
        {
            return _context.Category.Find(Categoryid);
        }
       public List<Category>ViewCategory()

        {
            return _context.Category.ToList();
        }
        public List<Category>GetCategory()
        {
            return _context.Category.ToList();
        }
        public void Deleteitem(int Categoryid)
        {
            Category i = _context.Category.Find(Categoryid);
            _context.Category.Remove(i);
            _context.SaveChanges();
        }
        public List<SubCategory>GetSubCategory()
        {
            return _context.SubCategory.ToList();
        }
        public void Deleteitems(int SubCategoryid)
        {
            SubCategory i = _context.SubCategory.Find(SubCategoryid);
            _context.SubCategory.Remove(i);
            _context.SaveChanges();

        }

        public List<Category> GetCategory(int Categoryid)
        {
            throw new NotImplementedException();
        }

        public List<SubCategory> GetSubCategory(int Categoryid)
        {
            throw new NotImplementedException();
        }
    }
}

