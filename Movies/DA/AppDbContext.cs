using Microsoft.EntityFrameworkCore;
using Movies.Models;

namespace Movies.DA
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
        {

        }
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieActor>().HasKey(m => new { m.ActorId, m.MovieId });
        }

        public DbSet<Actor> Actors { get; set; }
        public DbSet<Movie> Movie { get; set; }
        public DbSet<MovieActor> MovieActor { get; set; }      
    }
}
