using System;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Arch.EntityFrameworkCore;
using WebApp.Objects;
using WebApplication1.Database;
using WebApplication1.Enums;
using WebApplication1.Models;
using WebApplication1.Objects;

namespace WebApplication1.Controllers
{
    public class AuthController : Controller
    {
        #region private

        private ApplicationContext db;

        #endregion

        public AuthController(ApplicationContext context)
        {
            db = context;
        }

        [HttpPost]
        [Route("auth/login")]
        public async Task<AuthInfo> Login([FromBody] AuthInput input)
        {
            var login = input.login;
            var password = input.password;
            var users = db.Users.Where(p => p.LoginName == login);
            User user;

            try
            {
                user = users.First();
            }
            catch (InvalidOperationException e)
            {
                return AuthInfo.Fail();
            }

            if (user.Password == password)
            {
                await SetCookies(login, RoleType.User);
                return AuthInfo.Success(login, RoleType.User);
            }

            return AuthInfo.Fail();
        }

        public async Task<AuthInfo> Registration([FromBody] AuthInput input)
        {
            var login = input.login;
            var password = input.password;
            var newUser = new User
            {
                LoginName = login, Password = password
            };

            await db.Users.AddAsync(newUser);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                return AuthInfo.Fail();
            }

            await SetCookies(login, RoleType.User);
            return AuthInfo.Success(login, RoleType.User);
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
                var loginName = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType);
                return AuthInfo.Success(loginName, roleType);
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