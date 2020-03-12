using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }

        [HttpPut]
        [Route("Editprofile")]
        public IActionResult Editprofile(Seller obj)
        {
            try
            {
                _repo.Editprofile(obj);
                return Ok();
            }
            catch (Exception e)
            {
                return Ok(e.InnerException.Message);
            }
        }

        [HttpGet]
        [Route("GetProfile/{Sellerid}")]
        public IActionResult GetProfile(int Sellerid)
        {
            try
            {
                return Ok(_repo.GetProfile(Sellerid));
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }




    }
}
            
