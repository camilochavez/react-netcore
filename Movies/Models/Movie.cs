using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Movies.Models
{
    [Table("Movie")]
    public class Movie
    {
        [Key, Column(Order =0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        [DisplayName("Id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        [DisplayName("Title")]
        public string Title { get; set; }

        [MaxLength(100)]
        [DisplayName("Director")]
        public string Director { get; set; }

        [MaxLength(100)]
        [DisplayName("DataReleased")]
        public DateTime DataReleased { get; set; }

        [MaxLength(10)]
        [DisplayName("Rating")]
        public string Rating { get; set; }

        [MaxLength(50)]
        [DisplayName("Genre")]
        public string Genre { get; set; }
    }
}
