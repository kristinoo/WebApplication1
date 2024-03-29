﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplication1.Models
{
    public class UserProfile
    {
        [Key] public Guid Id { get; set; } = Guid.Empty;
        
        public Guid UserId { get; set; } = Guid.Empty;
        [ForeignKey("UserId")] public User? User { get; set; }

        public string Knowledge { get; set; } = string.Empty;
        
        public string Interests { get; set; } = string.Empty;
        
        public bool SearchStatus { get; set; } = false;
        
        public bool MentorSearchStatus { get; set; } = false;
        
        public bool MentorStatus { get; set; } = false;
        
        public string Description { get; set; } = string.Empty;
        
    }
}