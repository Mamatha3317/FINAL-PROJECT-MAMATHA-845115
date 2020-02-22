using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public int Bid { get; set; }
        public string Bname { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string Bmobile { get; set; }
        public string Bmail { get; set; }
        public string Bpwd { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
