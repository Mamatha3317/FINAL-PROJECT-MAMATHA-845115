using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Cart
    {
        public int Cartid { get; set; }
        public int? Itemid { get; set; }
        public int? Categoryid { get; set; }
        public int? SubCategoryid { get; set; }
        public int? Price { get; set; }
        public string Description { get; set; }
        public int? Stocknumber { get; set; }
        public int? Sellerid { get; set; }
        public int? Buyerid { get; set; }
        public string Imagepath { get; set; }
    }
}
