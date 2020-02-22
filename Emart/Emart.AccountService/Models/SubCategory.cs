using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public int Scid { get; set; }
        public string Scname { get; set; }
        public int? Cid { get; set; }
        public string BriefDetails { get; set; }
        public string Gstin { get; set; }

        public virtual Category C { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
