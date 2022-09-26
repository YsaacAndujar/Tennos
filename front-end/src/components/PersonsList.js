import React from 'react';
const api = require('./API.js')
function PersonList() {
    //const persons = api.getPersons();
    console.log(api.getPersons());
    return(
        <>
        
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
                {/* {persons.map((person, i)=>{
                    return <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    </tr>
                })} */}
            </tbody>
            </table>
        </>
    )
}

export default PersonList;