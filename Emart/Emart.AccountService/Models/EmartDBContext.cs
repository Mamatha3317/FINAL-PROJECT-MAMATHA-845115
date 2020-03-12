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
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Discounts> Discounts { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }
        public virtual DbSet<Transactions> Transactions { get; set; }

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
                entity.Property(e => e.Buyerid).ValueGeneratedNever();

                entity.Property(e => e.Buyermail)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Buyername)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Buyerno)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Buyerpassword)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Createddatetime).HasColumnType("date");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("cart");

                entity.Property(e => e.Cartid)
                    .HasColumnName("cartid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Imagepath)
                    .HasMaxLength(10)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Categoryid).ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("Brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Categoryname)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Discounts>(entity =>
            {
                entity.HasKey(e => e.Discountid)
                    .HasName("PK__Discount__E43E61EE017934A8");

                entity.Property(e => e.Discountid).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.DiscountCode)
                    .HasColumnName("Discount_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("End_date")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Percentage)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.StartDate)
                    .HasColumnName("Start_date")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.Itemid)
                    .HasName("PK__Items__727D8793A97EDAA8");

                entity.Property(e => e.Itemid).ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Imagepath)
                    .HasColumnName("imagepath")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Itemname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Stocknumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Categoryid)
                    .HasConstraintName("FK__Items__Categoryi__66603565");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__Items__Sellerid__2739D489");

                entity.HasOne(d => d.SubCategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubCategoryid)
                    .HasConstraintName("fk");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.Purchaseid)
                    .HasName("PK__Purchase__6B379FB6337F5C1F");

                entity.ToTable("Purchase_History");

                entity.Property(e => e.Purchaseid).ValueGeneratedNever();

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("date");

                entity.Property(e => e.NoOfItems).HasColumnName("No_Of_Items");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.TransactionType)
                    .HasColumnName("Transaction_type")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Buyerid)
                    .HasConstraintName("FK__Purchase___Buyer__6E01572D");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Itemid)
                    .HasConstraintName("FK__Purchase___Itemi__6FE99F9F");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__Purchase___Selle__6EF57B66");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.Property(e => e.Sellerid).ValueGeneratedNever();

                entity.Property(e => e.BriefAboutCompany)
                    .HasColumnName("Brief_about_company")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("date");

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postal_address")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sellermail)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sellermobile)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sellername)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Sellerpassword)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .HasColumnName("website")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.Property(e => e.SubCategoryid).ValueGeneratedNever();

                entity.Property(e => e.BriefDetails)
                    .HasColumnName("Brief_details")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .HasColumnName("GSTIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.SubCategoryname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.Categoryid)
                    .HasConstraintName("FK__SubCatego__Categ__6383C8BA");
            });

            modelBuilder.Entity<Transactions>(entity =>
            {
                entity.HasKey(e => e.Transactionid)
                    .HasName("PK__Transact__55423643C50DA6D1");

                entity.Property(e => e.Transactionid).ValueGeneratedNever();

                entity.Property(e => e.DateTime)
                    .HasColumnName("Date_time")
                    .HasColumnType("date");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Transactiontype)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.Buyerid)
                    .HasConstraintName("FK__Transacti__Buyer__02FC7413");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Transactions)
                    .HasForeignKey(d => d.Sellerid)
                    .HasConstraintName("FK__Transacti__Selle__03F0984C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
