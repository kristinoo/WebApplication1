using WebApplication1.Models;

namespace WebApplication1.Objects
{
    public class AppUserProfile
    {
        public string Knowledge { get; set; } 

        public string Interests { get; set; } 

        public bool SearchStatus { get; set; }

        public bool MentorSearchStatus { get; set; }

        public bool MentorStatus { get; set; } 

        public string Description { get; set; } 

        public static AppUserProfile Copy(UserProfile userProfile)
        {
            return new AppUserProfile
            {
                Knowledge = userProfile.Knowledge,
                Interests = userProfile.Interests,
                SearchStatus = userProfile.SearchStatus,
                MentorSearchStatus = userProfile.MentorSearchStatus,
                MentorStatus = userProfile.MentorStatus,
                Description = userProfile.Description
            };
        }
    }
}