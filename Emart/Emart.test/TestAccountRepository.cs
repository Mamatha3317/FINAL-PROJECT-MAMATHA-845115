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
        [Description("Test buyer registration")]
        public void TestBuyerRegistration()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Buyerid = 6,
                Buyermail = "buyer6@mail.com",
                Buyerno = "7032389546",
                Buyername = "buyer6",
                Createddatetime = System.DateTime.Now,
                Buyerpassword = "buyer6",

            });

        }
        [Test]
        [Description("get buyer Login")]
        public void TestBuyerLogin()
        {
            Buyer b = _repo.BuyerLogin("buyer1", "buyer1");
            Assert.IsNotNull(b);
        }
        [Test]
        [Description("Test seller registraction")]
        public void TestSellerRegistration()
        {
            _repo.SellerRegister(new Seller()
            {
                Sellerid = 55,
                Sellermail = "buyer99@gmail.com",
                Sellermobile = "9999999999",
                Sellername = "seller45",
                //   Createddate = System.DateTime.Now,
                Sellerpassword = "ASDFGHJ*",
                BriefAboutCompany = "good ",
                Companyname = "cottonbussiness",
                Gstin = "76",
                PostalAddress = "chennai"

            });

        }
        [Test]
        [Description("test seller Login")]
        public void TestSellerLogin()
        {
            Seller s = _repo.SellerLogin("seller1", "seller1");
            Assert.IsNotNull(s);
        }
    }
}
