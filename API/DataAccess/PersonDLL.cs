using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Models;
namespace DataAccess
{
    public class PersonDLL
    {
        TennosDBContext context = new TennosDBContext();

        public List<Person> Get()
        {
            return context.Persons.ToList();
        }
        public (bool,Object) Add(Person person)
        {
            var persons = context.Persons.Where(x => x.Id != person.Id).Where(x => x.Email.ToLower().Trim() == person.Email.ToLower().Trim());
            if (persons.Any())
            {
                return (false, new
                {
                    Email = new List<String> { "Email is alredy in use" }
                });
            }
            person.Email = person.Email.ToLower().Trim();
            context.Persons.Add(person);
            context.SaveChanges();
            return (true, person);
        }
        public (bool, Object) Update(Person personObj)
        {
            var person = context.Persons.Find(personObj.Id);
            if (person == null)
            {
                return (false, new
                {
                    Id = new List<String> { "Id not found" }
                });
            }
            var persons = context.Persons.Where(x=>x.Id!=person.Id).Where(x=>x.Email.ToLower().Trim() == personObj.Email.ToLower().Trim());
            if (persons.Any())
            {
                return (false, new
                {
                    Email = new List<String> { "Email is alredy in use" }
                });
            }
            /*foreach(var x in persons)
            {
                if (x.Id != person.Id)
                {
                    return (false, new
                    {
                        Email = new List<String> { "Email is alredy in use" }
                    });
                }
            }*/

            person.FirstName = personObj.FirstName;
            person.LastName = personObj.LastName;
            person.Birth = personObj.Birth;
            person.Email = personObj.Email.ToLower().Trim();
            context.SaveChanges();
            return (true, person);
        }
        public Person Details(int id)
        {
            return context.Persons.Find(id);
        }
        public bool Delete(int id)
        {
            var person = context.Persons.Find(id);
            if (person != null){
                context.Persons.Remove(person);
                context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
