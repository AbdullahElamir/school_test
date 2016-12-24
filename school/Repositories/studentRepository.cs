using school.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace school.Repositories
{
    public class studentRepository
    {
        schoolEntities DB = new schoolEntities();
        public IEnumerable<student> GetAll()
        {
            return DB.students;
        }
 
        public student Get(int id)
        {
            return DB.students.Find(id);
        }
 
        public student Add(student item)
        {

            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
 
            DB.students.Add(item);
            DB.SaveChanges();
            return item;
        }
 
        public bool Update(student item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            var student = DB.students.Single(a => a.id == item.id);
 
            student.FirstName = item.FirstName;
            student.LastName = item.LastName;
            student.Age = item.Age;
            student.City = item.City;
            DB.SaveChanges();
            return true;
        }
        public bool Delete(int id)
        {
            student item = DB.students.Find(id);
            DB.students.Remove(item);
            DB.SaveChanges();
            return true;
        }
    }




 }
