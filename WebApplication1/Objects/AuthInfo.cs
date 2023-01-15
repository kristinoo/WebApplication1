using WebApplication1.Enums;

namespace WebApplication1.Objects
{
    public class AuthInfo
    {
        public bool IsAuthenticated { get; private set; }

        public string LoginName { get; protected set; } = string.Empty;
        public RoleType Role { get; private set; }

        public static AuthInfo Success(string loginName ,RoleType role)
        {
            return new AuthInfo()
            {
                LoginName = loginName,
                IsAuthenticated = true,
                Role = role
            };
        }

        public static AuthInfo Fail()
        {
            return new AuthInfo()
            {
                IsAuthenticated = false,
                Role = RoleType.Undefined
            };
        }
    }
}
