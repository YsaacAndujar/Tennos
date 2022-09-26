const url = "https://localhost:44325/api/";

export async function getPersons() {
    const response = await fetch(url+"persons/");
    return await response.json();
}