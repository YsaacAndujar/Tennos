import React, {useState, useEffect} from 'react';
import {
    Link
} from 'react-router-dom';
const api = require('./API.js')
function PersonList() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        api.getPersons().then(result=>{
            setPersons(result);
        });
    }, [])
    
    return(
        <>
            <div style={{margin:"20px 10px 10px"}}>
                <Link to="/add" className="btn btn-primary float-right">Add new person</Link>
            </div>
            <h2>Persons list</h2>
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Birth</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {persons.map((person, i)=>{
                    return <tr key={i}>
                        <th scope="row">{person["id"]}</th>
                        <td>{person["firstName"]||"--"}</td>
                        <td>{person["lastName"]||"--"}</td>
                        <td>{person["email"]||"--"}</td>
                        <td>{
                                person["birth"] != null ? person["birth"].substring(0, 10):"--"
                            }</td>
                        <td><Link to={"/"+person['id']} className="btn btn-primary">Details</Link></td>
                    </tr>
                })}
            </tbody>
            </table>
        </>
    )
}

export default PersonList;