using System.Linq.Expressions;
using WebApplication1.Models;

namespace WebApplication1.Objects
{
    public class ProfileInput
    {
        public string Knowledge { get; set; } = string.Empty;
        
        public string Interests { get; set; } = string.Empty;
        
        public bool SearchStatus { get; set; } = false;
        
        public bool MentorSearchStatus { get; set; } = false;
        
        public bool MentorStatus { get; set; } = false;
        
        public string Description { get; set; } = string.Empty;

        public static void CopyToModel(ProfileInput input, UserProfile model)
        {
            model.Knowledge = input.Knowledge;
            model.Description = input.Description;
            model.MentorStatus = input.MentorStatus;
            model.SearchStatus = input.SearchStatus;
            model.Interests = input.Interests;
            model.MentorSearchStatus = input.MentorSearchStatus;
        }
    }
}