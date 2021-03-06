using System;

namespace TourManagement.API.Dtos
{
    public class ShowAbstractBase
    {
        public DateTimeOffset Date { get; set; }
        public string Venue { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}