﻿using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Category
    {
        public Category()
        {
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int Categoryid { get; set; }
        public string Categoryname { get; set; }
        public string BriefDetails { get; set; }

        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
