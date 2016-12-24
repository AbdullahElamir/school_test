using school.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace school.Interface
{
    interface IPersonRepository
    {
        IEnumerable<student> GetAll();
        student Get(int id);
        student Add(student item);
        bool Update(student item);
        bool Delete(int id);

    }
}
