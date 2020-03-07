using System;
using System.Collections.Generic;

namespace Emart.AccountService.Models
{
    public partial class Transactions
    {
        public int Transactionid { get; set; }
        public int? Buyerid { get; set; }
        public int? Sellerid { get; set; }
        public DateTime? DateTime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Seller Seller { get; set; }
    }
}
