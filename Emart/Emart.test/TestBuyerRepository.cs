using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.BuyerService.Controllers;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;

namespace Emart.test
{
    [TestFixture]
    class TestBuyerRepository
    {
        BuyerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetById()
        {
            var result = _repo.GetById(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void Testgetprofile()
        {
            var result = _repo.getprofile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void Testeditprofile()
        {
            Buyer buyer = _repo.getprofile(4);
            buyer.Buyername = "buyer4";
            _repo.editprofile(buyer);
            Buyer buyer1 = _repo.getprofile(4);
            Assert.AreSame(buyer, buyer1);

        }
        [Test]
        public void TestSearchByCategoryId()
        {
            var x = _repo.SearchByCategoryId(2);
            Assert.IsNotNull(x);
        }
        [Test]
        [Description("Get iteam  search by name")]
        public void Testsearchitems()
        {
            var x = _repo.searchitems("toys");
            Assert.NotNull(x);
            //   Assert.Greater(x.Count, 0);
        }
       
        [Test]
        public void TestGetCart()
        {
            var x = _repo.GetCart(1);
            Assert.NotNull(x);
            Assert.Greater(x.Count, 0);
        }
        [Test]
        
        [Description("test add to cart")]
        public void TestAddToCart()
        {
            _repo.AddToCart(new Cart()
            {
                Cartid = 33,
                Buyerid = 1,
                Categoryid = 3,
                Description = "notbad",
                Itemid = 55,
                Imagepath = "46.jpg",
               
                Price = 785,
                Sellerid = 1,
                Stocknumber = 1,
                SubCategoryid = 3,

            });
            var x = _repo.GetCart(2);
            Assert.IsNotNull(x);


        }
        [Test]
        public void TestDeleteFromCart()
        {
            _repo.DeleteFromCart(3);
        }

    }
}

