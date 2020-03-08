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
        List<SubCategory> ViewSubCategory();
        void AddCategory(Category obj);
        void AddSubCategory(SubCategory obj);
        Category getbyid(int Categoryid);
        SubCategory getby(int SubCategoryid);
        List<Category> GetCategory();
        void DeleteCategory(int Categoryid);
       
        void DeleteSubCategory(int SubCategoryid);
    }
}

