using System;
using System.Collections.Generic;

namespace Emart.AdminService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
            Transactions = new HashSet<Transactions>();
        }

        public int Buyerid { get; set; }
        public string Buyername { get; set; }
        public DateTime? Createddatetime { get; set; }
        public string Buyerno { get; set; }
        public string Buyermail { get; set; }
        public string Buyerpassword { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<Transactions> Transactions { get; set; }
    }
}
