using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Movies.Models
{
    [Table("Actor")]
    public class Actor
    {
        [Key, Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        [DisplayName("Id")]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        [DisplayName("Name")]
        public string Name{ get; set; }

        [MaxLength(10)]
        [DisplayName("Gender")]
        public string Gender { get; set; }

        [DisplayName("Age")]
        public int? Age { get; set; }

        [MaxLength(255)]
        [DisplayName("Picture")]
        public string Picture { get; set; }
    }
}
