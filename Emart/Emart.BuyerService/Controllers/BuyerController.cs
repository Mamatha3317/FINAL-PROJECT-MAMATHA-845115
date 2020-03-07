using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public void buyitem(Transactions obj)
        {
            _repo.buyitem(obj);
        }

        [HttpPut]
        [Route("editprofile")]
        public void editprofile(Buyer obj)
        {
            _repo.editprofile(obj);

        }
        [HttpGet]
        [Route("getprofile/{Buyerid}")]
        public IActionResult getprofile(int Buyerid)
        {
            try
            {
                return Ok(_repo.getprofile(Buyerid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet]
        [Route("searchitems/{Itemname}")]
        public IActionResult searchitems(string Itemname)
        {
            try
            {
                return Ok(_repo.searchitems(Itemname));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("Transactionhistory/{Buyerid}")]
        public IActionResult transactionhistory(int Buyerid)
        {
            try
            {
                return Ok(_repo.transactionshistory(Buyerid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult GetCategory()
        {
            try
            {
                return Ok(_repo.GetCategory());
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }
        [HttpGet]
        [Route("GetSubCategory/{Categoryid}")]
        public IActionResult Getsubcategory(int Categoryid)
        {
            try
            {
                return Ok(_repo.GetSubcategory(Categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }


    }
}
