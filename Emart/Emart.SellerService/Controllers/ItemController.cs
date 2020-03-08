using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("Additem")]
        public IActionResult Additem(Items obj)
        {
            try
            {
                _repo.Additem(obj);
                return Ok("item added");
            }
            catch (Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Viewitems/{Sellerid}")]
        public IActionResult viewitems(int Sellerid)
        {
            try
            {
                return Ok(_repo.Viewitems(Sellerid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpDelete]
        [Route("Deleteitems/{Itemid}")]
        public IActionResult Deleteitems(int Itemid)
        {
            try
            {
      
                _repo.Deleteitems(Itemid);
                return Ok();
            }
            catch(Exception e)
            {
                return NotFound(e.InnerException.Message);
            }
            }
        [HttpPut]
        [Route("Updateitem")]
        public void Updateitem(Items obj)
        {

            _repo.Updateitem(obj);


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
                return NotFound(e.Message);
            }
        }
        [HttpGet]
        [Route("GetItems/{Itemid}")]
        public IActionResult GetItems(int Itemid)
        {
            try
            {
                return Ok(_repo.GetItems(Itemid));
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
        public IActionResult GetSubCategory(int Categoryid)
        {
            try
            {

                return Ok(_repo.GetSubCategory(Categoryid));
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

    }
}
