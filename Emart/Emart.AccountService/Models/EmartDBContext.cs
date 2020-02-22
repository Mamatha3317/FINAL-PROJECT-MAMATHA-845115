using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.AccountService.Models
{
    public partial class EmartDBContext : DbContext
    {
        public EmartDBContext()
        {
        }

        public EmartDBContext(DbContextOptions<EmartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-M6PJD1D;Integrated Security=True;Initial Catalog=EmartDB;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasKey(e => e.Bid)
                    .HasName("PK__Buyer__C6D111C973562D42");

                entity.Property(e => e.Bid).ValueGeneratedNever();

                entity.Property(e => e.Bmail)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bmobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Bpwd)
                    .HasColumnName("bpwd")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDateTime).HasColumnType("date");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasKey(e => e.Cid)
                    .HasName("PK__Category__C1FFD861CCE1A0FC");

                entity.Property(e => e.Cid).ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Cname)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.Iid)
                    .HasName("PK__items__C4962F84B76199F8");

                entity.ToTable("items");

                entity.Property(e => e.Iid).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("item_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Scid).HasColumnName("SCid");

                entity.Property(e => e.StockNumber)
                    .HasColumnName("stock_number")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__items__Cid__2A4B4B5E");

                entity.HasOne(d => d.Sc)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Scid)
                    .HasConstraintName("FK__items__SCid__2B3F6F97");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.Pid)
                    .HasName("PK__Purchase__C5705938C7072E8D");

                entity.ToTable("Purchase_History");

                entity.Property(e => e.Pid).ValueGeneratedNever();

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("date");

                entity.Property(e => e.NoOfItems).HasColumnName("No_Of_Items");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionType)
                    .HasColumnName("Transaction_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.B)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Bid)
                    .HasConstraintName("FK__Purchase_Hi__Bid__37A5467C");

                entity.HasOne(d => d.I)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Iid)
                    .HasConstraintName("FK__Purchase_Hi__Iid__398D8EEE");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Purchase_Hi__Sid__38996AB5");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasKey(e => e.Sid)
                    .HasName("PK__Seller__CA1E5D78E357C04E");

                entity.Property(e => e.Sid).ValueGeneratedNever();

                entity.Property(e => e.BriefAboutCompany)
                    .HasColumnName("brief_about_company")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postal_address")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Smail)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Smobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Spwd)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasKey(e => e.Scid)
                    .HasName("PK__SubCateg__F7F7BF149033192E");

                entity.Property(e => e.Scid)
                    .HasColumnName("SCid")
                    .ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Scname)
                    .HasColumnName("SCname")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.C)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.Cid)
                    .HasConstraintName("FK__SubCategory__Cid__276EDEB3");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
