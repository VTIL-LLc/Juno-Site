using System.Collections.Generic;

namespace Juno.ViewModels
{
    public class PaginationViewModel<T>
    {
        public ICollection<T> Items { get; set; }
        public int CountRemaining { get; set; } // Use this to determine how many more pages to append to the end of the list
    }
}