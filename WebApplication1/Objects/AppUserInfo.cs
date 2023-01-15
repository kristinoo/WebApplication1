using System;
using WebApplication1.Models;

namespace WebApplication1.Objects
{
    public class AppUserInfo
    {
        public Guid Id { get; private set; } = Guid.Empty;

        public string LoginName { get; private set; } = string.Empty;

        public string Role { get; private set; } = string.Empty;

        public AppUserProfile UserProfile { get; private set; } = null;

        public static AppUserInfo Success ( User user)
        {
            return new AppUserInfo
            {
                Id = user.Id,
                LoginName = user.LoginName,
                Role = user.Role,
                UserProfile = AppUserProfile.Copy(user.UserProfile)
            };
        }

        public static AppUserInfo Fail()
        {
            return new AppUserInfo();
        }
    }
}