using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApp.Objects;
using WebApplication1.Enums;
using WebApplication1.Objects;

namespace WebApplication1.Controllers
{
    public class AuthController : Controller
    {
        [HttpPost]
        [Route("auth/login")]
        public async Task<AuthInfo> Login([FromBody] AuthInput input)
        {
            if (input.login == "test" && input.password == "admin")
            {
                await SetCookies(input.login, RoleType.Admin);
                return AuthInfo.Success(RoleType.Admin);
            }

            return AuthInfo.Fail();
        }

        [HttpGet]
        [Route("auth/logout")]
        public async Task<AuthInfo> Logout()
        {
            await RemoveCookies();
            return GetInfo();
        }

        [HttpGet]
        [Route("auth/getInfo")]
        public AuthInfo GetInfo()
        {
            if (User?.Identity?.IsAuthenticated ?? false)
            {
                string role = User.FindFirstValue(ClaimsIdentity.DefaultRoleClaimType);
                RoleType roleType = Role.FromString(role);
                return AuthInfo.Success(roleType);
            }

            return AuthInfo.Fail();
        }

        #region private
        private async Task SetCookies(string login, RoleType role)
        {
            var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, login),
                    new Claim(ClaimsIdentity.DefaultRoleClaimType, role.ToString())
                };

            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType,
                ClaimsIdentity.DefaultRoleClaimType);

            await AuthenticationHttpContextExtensions.SignInAsync(HttpContext, new ClaimsPrincipal(id));
        }

        private async Task RemoveCookies()
        {
            await AuthenticationHttpContextExtensions.SignOutAsync(HttpContext);
        }
        #endregion
    }
}
