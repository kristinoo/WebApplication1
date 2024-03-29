﻿using System;
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
    public class ProfileController : Controller
{
    #region private

    private ApplicationContext db;

    private User GetUser(string loginName)
    {
        if(string.IsNullOrEmpty(loginName))
        {
            if (!(User?.Identity?.IsAuthenticated ?? false)) return null;

            loginName = User.FindFirstValue(ClaimsIdentity.DefaultNameClaimType).ToUpper();
        }    
        var users = db.Users.Where(p => p.LoginName == loginName).Include(u => u.UserProfile);
        User user;
        try
        {
            user = users.First();
        }catch(InvalidOperationException e)
        {
            return null;
        }

        return user;

    }

    #endregion

    public ProfileController(ApplicationContext context)
    {
        db = context;
    }
    
    [HttpGet]
    [Route("api/user/")]
    public async Task<AppUserInfo> GetUserProfile()
    {
        var user = GetUser(string.Empty);

        if(user == null) return AppUserInfo.Fail();
        
        if(user.UserProfile == null)
        {
            var newProfile = new UserProfile {User = user};
            user.UserProfile = newProfile;
            db.Users.Update(user);
            await db.UsersProfile.AddAsync(newProfile);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                return AppUserInfo.Fail();
            }
        }

        return AppUserInfo.Success(user);
    }
    
    [HttpGet]
    [Route("api/user/{*profile}")]
    public async Task<AppUserInfo> GetUserProfile(string? profile)
    {
        var user = GetUser(profile);

        if(user == null) return AppUserInfo.Fail();
        
        if(user.UserProfile == null)
        {
            var newProfile = new UserProfile {User = user};
            user.UserProfile = newProfile;
            db.Users.Update(user);
            await db.UsersProfile.AddAsync(newProfile);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateException e)
            {
                return AppUserInfo.Fail();
            }
        }

        return AppUserInfo.Success(user);
    }
    [HttpPost]
    [Route("api/user")]
    public async Task<AppUserInfo> Registration([FromBody] ProfileInput input)
    {
        if (!(User?.Identity?.IsAuthenticated ?? false))
        {
            AppUserInfo.Fail();
        }
        var user = GetUser(null);
    
        if(user == null) return AppUserInfo.Fail();
        
        if(user.UserProfile == null)
        {
            var newProfile = new UserProfile {User = user};
            ProfileInput.CopyToModel(input,newProfile);
            user.UserProfile = newProfile;
            db.Users.Update(user);
            await db.UsersProfile.AddAsync(newProfile);
        }
        else
        {
            var userProfile = user.UserProfile;
            ProfileInput.CopyToModel(input,userProfile);
            db.UsersProfile.Update(userProfile);
        }
        try
        {
            await db.SaveChangesAsync();
        }
        catch (DbUpdateException e)
        {
            return AppUserInfo.Fail();
        }
        
        return await GetUserProfile(null);
    }
    
}
}