using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required] public string LoginName { get; set; }

        [Required] public string Password { get; set; }

        public string Role { get; set; } = RoleType.User.ToString();

        public List<Pair> Pairs { get; set; } = new List<Pair>();

        public UserProfile? UserProfile { get; set; } = null;
    }

}