using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Controllers;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;

namespace Emart.test
{
    [TestFixture]
    class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void Testgetbyid()
        {
            var result = _repo.getbyid(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void Testgetby()
        {
            var result = _repo.getby(2);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestViewCategory()
        {
            var result = _repo.ViewCategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestViewSubCategory()
        {
            var result = _repo.ViewSubCategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void AddCategory()
        {
            _repo.AddCategory(new Category()
            {
                Categoryid = 2,
                Categoryname="dolls",
                BriefDetails="lids dolls"
            });
            var result = _repo.getbyid(2);
            Assert.NotNull(result);
        }
        [Test]
        public void AddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                SubCategoryid = 2,
                SubCategoryname = "toys",
                Categoryid = 2,
                BriefDetails = "kids toys",
                Gstin = "876"
            }) ;
            var result = _repo.getby(2);
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory(5);
            var result = _repo.getby(5);
            Assert.Null(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(5);
            var result = _repo.getbyid(5);
            Assert.Null(result);
        }
    }
}
