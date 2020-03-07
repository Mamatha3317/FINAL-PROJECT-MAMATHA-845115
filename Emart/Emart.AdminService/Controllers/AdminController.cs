using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;

namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public void Addcategory(Category obj)
        {
            _repo.AddCategory(obj);
        }
        [HttpGet]
        [Route("ViewCategory")]
        public IActionResult view()
        {
            try
            {
                return Ok(_repo.ViewCategory());
            }
            catch(Exception e)
            {
                return NotFound(e.Message);
            }
        }
        [HttpPost]
        [Route("AddSubCategory")]
        public void Addsubcategory(SubCategory obj)
        {
            _repo.AddSubCategory(obj);
        }
        [HttpGet]
        [Route("GetCategory/{Categoryid}")]
        public IActionResult GetCategory(int Categoryid)
        {
            return Ok(_repo.getbyid(Categoryid));
        }
        [HttpGet]
        [Route("GetSubCategory/{SubCategoryid}")]
        public IActionResult GetSubCategory(int SubCategoryid)
        {
            return Ok(_repo.getby(SubCategoryid));
        }

    }

}
    