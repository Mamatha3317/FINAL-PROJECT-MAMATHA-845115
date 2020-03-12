using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AccountService.Controllers;
using Emart.AccountService.Models;
using Emart.AccountService.Repositories;

namespace Emart.test
{
    [TestFixture]
    class TestAccountRepository
    {
        AccountRepository _repo;
        [SetUp]
        public void Setup()
        {
            _repo = new AccountRepository(new EmartDBContext());
        }
        [Test]
        public void TestBuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Buyerid = 5,
                Buyername = "madhu",
                Buyermail = "madhu@mail.com",
                Buyerno = "9848586878",
                Buyerpassword = "madhu"
            });
            
        }
    }
}
