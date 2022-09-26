const url = "https://localhost:44325/api/";

export async function getPersons() {
    const response = await fetch(url+"persons/").catch(error => console.log(error));
    return await response.json();
}

export async function getPerson(id) {
    const response = await fetch(url+"persons/"+id).catch(error => console.log(error));
    return await response.json();
}

export async function putPerson(person) {
    const response = await fetch(url+"persons/"+person["id"],{method:"PUT",
    headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(person),}).catch(error => console.log(error));
    return await response.json();
}
export async function deletePerson(person) {
    const response = await fetch(url+"persons/"+person["id"],{method:"DELETE"}).catch(error => console.log(error));
    return await response.json();
}