using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Inventario.Models
{
    public class Article
    {

        [Key]
        public long Id { set; get; }
        public string Name { set; get; }
        public string Description { set; get; }
        public string Type { set; get; }
        public string Serial { set; get; }
        public float Value { set; get; }

        public  DateTime dateOfPurchase { set; get; }
        public string state { set; get; }


        public long areaForeignKey { get; set; }
        [ForeignKey("areaForeignKey")]
        [JsonIgnore]
        public Area Area { get; set; }
    }
}