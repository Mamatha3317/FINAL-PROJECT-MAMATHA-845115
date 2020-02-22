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

        public int Iid { get; set; }
        public int? Cid { get; set; }
        public int? Scid { get; set; }
        public int? Price { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public string StockNumber { get; set; }
        public string Remarks { get; set; }

        public virtual Category C { get; set; }
        public virtual SubCategory Sc { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
