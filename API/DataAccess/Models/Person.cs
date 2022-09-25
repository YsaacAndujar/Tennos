using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
#nullable disable

namespace DataAccess.Models
{
    public partial class Person
    {
        public int? Id { get; set; }
        [MaxLength(50)]
        public string FirstName { get; set; }
        [MaxLength(50)]
        public string LastName { get; set; }
        [MaxLength(150), Required, EmailAddress]
        public string Email { get; set; }
        //example 2016-12-24
        public DateTime? Birth { get; set; }
    }
}
