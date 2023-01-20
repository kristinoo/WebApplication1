using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using WebApplication1.Database;
using WebApplication1.Models;
using WebApplication1.Objects;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Controllers
{

    /// <summary>
    /// Controller for users Pairs
    /// </summary>
    public class PairController : Controller
    {
        #region private

        private User? GetUser(string? loginName)
        {
            if (string.IsNullOrEmpty(loginName))
            {
                if (!(User?.Identity?.IsAuthenticated ?? false)) return null;

                loginName = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType).ToUpper();
            }

            var users = db.Users.Where(p => p.LoginName== loginName).Include(u => u.Pairs);
            User user;
            try
            {
                user = users.First();
            }
            catch (InvalidOperationException e)
            {
                return null;
            }

            return user;

        }

        private ApplicationContext db;

        #endregion

        public PairController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        [Route("api/pairs")]
        public async Task<PairsInfo> GetUserProfile()
        {
            var user = GetUser(string.Empty);

            if (user == null) return PairsInfo.Fail("No such a user");

            return PairsInfo.Success(user.Pairs, db);
        }

        [HttpGet]
        [Route("api/pairs/random")]
        public async Task<PairsInfo> Random()
        {
            var user = GetUser(string.Empty);

            var users = db.Users.ToList();

            if (user == null) return PairsInfo.Fail("No such a user");

            foreach (var u in users)
            {
                db.Pairs.Add(new Pair
                {
                    UserId = user.Id, PairedUserId = u.Id, Rating = 5.0f, Comment = "Nicht vergessen einen Anruf zu machen", Type = "-"
                });
            }

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                return PairsInfo.Fail(e.Message);
            }

            return PairsInfo.Success(user.Pairs, db);
        }



    }
}