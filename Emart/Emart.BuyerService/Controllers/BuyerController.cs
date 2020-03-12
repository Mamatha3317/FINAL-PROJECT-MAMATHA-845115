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

        [HttpGet]
        [Route("GetById/{Buyerid}")]
        public IActionResult GetById(int Buyerid)
        {
            try
            {
                return Ok(_repo.GetById(Buyerid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("Additem")]
        public void Additem(Transactions obj)
        {
            _repo.Additem(obj);
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
        [Route("TransactionHistory/{Buyerid}")]
        public IActionResult TransactionHistory(int Buyerid)
        {
            try
            {
                return Ok(_repo.TransactionHistory(Buyerid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
       
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchByCategoryId/{Categoryid}")]
        public IActionResult SearchByCategoryId(int Categoryid)
        {
            try
            {
                return Ok(_repo.SearchByCategoryId(Categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }

        [HttpPost]
        [Route("AddtoCart")]
        public void AddToCart(Cart obj)
        {
            _repo.AddToCart(obj);
        }
        [HttpDelete]
        [Route("DeleteFromCart/{Cartid}")]
        public void Delete(int Cartid)
        {
            _repo.DeleteFromCart(Cartid);
        }

        [HttpGet]
        [Route("GetCart/{Buyerid}")]
        public IActionResult GetCart(int Buyerid)
        {
            try
            {
                return Ok(_repo.GetCart(Buyerid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }

        }



    }
}
