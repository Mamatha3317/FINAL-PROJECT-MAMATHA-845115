using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Emart.SellerService.Controllers;

namespace Emart.test
{
   [TestFixture]
    class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new ItemRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetItems()
        {
            var result = _repo.GetItems(100);
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestViewitems()
        {
            var result = _repo.Viewitems(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestAdditem()
        {
            _repo.Additem(new Items()
            {
                Itemid = 101,
                Categoryid = 772,
                Price = 1500,
                Itemname = "d",
                Description = "dolls",
                Stocknumber ="65",
                Remarks="good",
                SubCategoryid=2,
                Sellerid=3
            });
            var result = _repo.GetItems(101);
            Assert.NotNull(result);

        }
        [Test]
        public void TestDeleteitems()
        {
            _repo.Deleteitems(515);
            var result = _repo.GetItems(515);
            Assert.Null(result);
        }
        [Test]
        public void TestGetCategory()
        {
            var result = _repo.GetCategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetSubCategory()
        {
            var result = _repo.GetSubCategory(2);
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestUpdateitem()
        {
            Items item = _repo.GetItems(516);
            item.Imagepath = "white saree.jpg";
            _repo.Updateitem(item);
            Items item1 = _repo.GetItems(516);
            Assert.AreSame(item, item1);
        }

    }
}
