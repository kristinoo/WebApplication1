using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class Pair
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        
        public Guid UserId { get; set; } = Guid.Empty;
        
        public Guid PairUserId { get; set; } = Guid.Empty;

        public string Type { get; set; } = string.Empty;

        public float Rating { get; set; } = .0f;

        public string Comment { get; set; } = string.Empty;
    }
}