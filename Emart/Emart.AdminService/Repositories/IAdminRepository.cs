using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        List<Category> ViewCategory();
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        Category getbyid(int Categoryid);
        SubCategory getby(int SubCategoryid);
        List<Category> GetCategory();
        void Deleteitem(int Categoryid);
        List<SubCategory> GetSubCategory();
        void Deleteitems(int SubCategoryid);
    }
}

