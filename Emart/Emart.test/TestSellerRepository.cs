using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Controllers;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;

namespace Emart.test
{
    class TestSellerRepository
    {
        SellerRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile(1);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestEditprofile()
        {
            Seller seller = _repo.GetProfile(8);
            seller.Sellername = "mamatha";
            _repo.Editprofile(seller);
            Seller seller1 = _repo.GetProfile(8);
            Assert.AreSame(seller, seller1);

        }
    }
}
