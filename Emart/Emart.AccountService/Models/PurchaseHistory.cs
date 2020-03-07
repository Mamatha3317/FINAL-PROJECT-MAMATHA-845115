using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class PurchaseHistory
    {
        public int Purchaseid { get; set; }
        public int? Buyerid { get; set; }
        public int? Sellerid { get; set; }
        public string TransactionType { get; set; }
        public int? Itemid { get; set; }
        public int? NoOfItems { get; set; }
        public DateTime? DateTime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
