﻿using System;
using System.Collections.Generic;

namespace Emart.GateWay.Models
{
    public partial class Discounts
    {
        public int Discountid { get; set; }
        public string DiscountCode { get; set; }
        public string Percentage { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Description { get; set; }
    }
}
