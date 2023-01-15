using WebApplication1.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Database{
    public class ApplicationContext : DbContext
    {

        public DbSet<User> Users { get; set; } = null!;
        
        public DbSet<UserProfile> UsersProfile { get; set; } = null!;
        
        public DbSet<Pair> Pairs { get; set; } = null!;
        

        public ApplicationContext(DbContextOptions<ApplicationContext> contextOptions) : base(contextOptions){
                Database.EnsureCreated();
            }

}
}

