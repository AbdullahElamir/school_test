using school.Interface;
using school.Models;
using school.Repositories;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace school.Controllers
{
    public class studentController : ApiController
    {
        static readonly studentRepository repository = new studentRepository();

        public IEnumerable GetAllStudent()
        {
            return repository.GetAll();
        }
        public student AddPerson(student  item)
        {
            return repository.Add(item);
        }

       

        public IEnumerable DeletePerson(int id)
        {
            if (repository.Delete(id))
                return repository.GetAll();
            else
                return null;
        }
 
        [HttpPut]
        public IEnumerable UpdatePerson(student item)
        {
            if (repository.Update(item))
                return repository.GetAll();
            else
                return null;
        }
    
       
    }
}
