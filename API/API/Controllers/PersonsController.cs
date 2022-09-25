using DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccess.Models;
using System.Net;
using System.Net.Http;
using Microsoft.AspNetCore.Http;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        PersonDLL dll = new PersonDLL();
        // GET: api/<PersonsController>
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return dll.Get();
        }

        // GET api/<PersonsController>/5
        [HttpGet("{id}")]
        public Object Get(int id)
        {
            var person = dll.Details(id);
            if (person != null)
            {
                return dll.Details(id);
            }
            return new HttpResponseMessage(HttpStatusCode.NotFound);
        }

        // POST api/<PersonsController>
        [HttpPost]
        public object Post(Person person)
        {
            if (ModelState.IsValid)
            {
                // Do something with the product (not shown).
                person.Id = null;
                var result = dll.Add(person);
                if (result.Item1)
                {
                    return this.StatusCode(StatusCodes.Status200OK, result.Item2);
                }
                return this.StatusCode(StatusCodes.Status400BadRequest, new { status = 400, errors=result.Item2 });
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        // PUT api/<PersonsController>/5
        [HttpPut("{id}")]
        public object Put(int id, Person person)
        {
            if (ModelState.IsValid)
            {
                person.Id = id;
                // Do something with the product (not shown).
                var result = dll.Update(person);
                if (result.Item1)
                {
                    return this.StatusCode(StatusCodes.Status200OK, result.Item2);
                }
                return this.StatusCode(StatusCodes.Status400BadRequest, new { status = 400, errors = result.Item2 });
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        // DELETE api/<PersonsController>/5
        [HttpDelete("{id}")]
        public object Delete(int id)
        {
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
