using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Movies.Models
{
    public class MovieActor
    {
        [Required]
        [DisplayName("MovieId")]
        public int MovieId { get; set; }

        [Required]
        [DisplayName("ActorId")]
        public int ActorId { get; set; }
    }
}
