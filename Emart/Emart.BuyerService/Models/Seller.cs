using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            Items = new HashSet<Items>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
            Transactions = new HashSet<Transactions>();
        }

        public int Sellerid { get; set; }
        public string Sellername { get; set; }
        public string Sellerpassword { get; set; }
        public string Gstin { get; set; }
        public string BriefAboutCompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string Sellermail { get; set; }
        public string Sellermobile { get; set; }
        public string Companyname { get; set; }
        public DateTime? CreatedDate { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<Transactions> Transactions { get; set; }
    }
}
