using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Inventario.Models
{
    public class Area
    {
        [Key]
        public long Id { set; get; }
        public string Name { set; get; }
        public string Description { set; get; }

        [JsonIgnore]
        public ICollection<Article> Articles { get; set; }
    }
}