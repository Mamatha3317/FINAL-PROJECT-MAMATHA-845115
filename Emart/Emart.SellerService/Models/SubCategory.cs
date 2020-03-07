using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int SubCategoryid { get; set; }
        public string SubCategoryname { get; set; }
        public int? Categoryid { get; set; }
        public string BriefDetails { get; set; }
        public string Gstin { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
