using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Itemid { get; set; }
        public int? Categoryid { get; set; }
        public int? Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public string Stocknumber { get; set; }
        public string Remarks { get; set; }
        public int? SubCategoryid { get; set; }
        public int? Sellerid { get; set; }
        public string Imagepath { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
