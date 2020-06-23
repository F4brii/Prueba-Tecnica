using Microsoft.EntityFrameworkCore;
using Inventario.Models;

namespace Inventario.Data
{
    public class aplicationContext : DbContext
    {
        public aplicationContext(DbContextOptions<aplicationContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Article>()
                .HasOne(p => p.Area)
                .WithMany(b => b.Articles)
                .HasForeignKey(p => p.areaForeignKey)
                .OnDelete(DeleteBehavior.Cascade);

                new Area{
                    Name = "Contabilidad",
                    Description = "Area contable"
                };
        }

        public DbSet<Area> Areas { get; set; }
        public DbSet<Article> Articles { get; set; }
    }
}