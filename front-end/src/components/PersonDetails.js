import React, {useState,useEffect} from 'react';
import {
    Link
} from 'react-router-dom';
import { useParams } from "react-router-dom";
const api = require('./API.js')
function sendAlert(errors) {
    alert(errors);
}
function PersonDetails() {
    const {id} = useParams();
    const [person, setPerson] = useState({
        "id":id,
        "firstName":"",
        "lastName":"",
        "email":"",
        "birth":""
    });
    const handleInputChange = (event) =>{
        setPerson({
            ...person,
            [event.target.name]:event.target.value
        });
    }
    const save = (event)=>{
        event.preventDefault();
        api.putPerson(person).then(result=>{
            if((result["statusCode"] == null && result["status"] == null) || (result["statusCode"] === 200 || result["status"] === 200)){
                setPerson(result);
                alert("Person updated successfully");
                return
            }
            sendAlert(result["errors"]["email"]);
        }).catch(error => console.log(error));
    }
    const deletePerson = (event)=>{
        if (!window.confirm("Are you sure that you want to delte this person?")){
            return;
        }
        api.deletePerson(person).then(result=>{
            console.log(result);
            if((result["statusCode"] == null && result["status"] == null) || (result["statusCode"] === 200 || result["status"] === 200)){
                alert("Person deleted successfully");
                window.location.replace("/");
                return
            }
            sendAlert("Ups, try it again");
        }).catch(error => console.log(error));
    }
    useEffect(() => {
            api.getPerson(id).then(result=>{
                if((result["statusCode"] == null && result["status"] == null) || (result["statusCode"] === 200 && result["status"] === 200)){
                    setPerson(result);
                }
            }).catch(error => console.log(error));
      }, [])
    
    return(
        <form onSubmit={save}>
            <div className="input-group input-group-default mb-3" style={{margin:"20px"}}>
                <span className="input-group-text" id="inputGroup-sizing-default">First name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={handleInputChange}
                name="firstName" value={person["firstName"]||""} maxLength={50}></input>
            </div>

            <div className="input-group input-group-default mb-3" style={{margin:"20px"}}>
                <span className="input-group-text" id="inputGroup-sizing-default">Last name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="lastName" onChange={handleInputChange} value={person["lastName"]||""} maxLength={50}></input>
            </div>

            <div className="input-group input-group-default mb-3" style={{margin:"20px"}}>
                <span className="input-group-text" id="inputGroup-sizing-default">Email name</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="email"onChange={handleInputChange}value={person["email"]} maxLength={150}></input>
            </div>

            <div className="input-group input-group-default mb-3" style={{margin:"20px"}}>
                <span className="input-group-text" id="inputGroup-sizing-default">Birth</span>
                <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="birth"onChange={handleInputChange}value={person["birth"].substring(0, 10)||""}></input>
            </div>
            <div style={{display:"flex"}}>
                <div style={{margin:"20px 10px 10px"}}>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
                <div style={{margin:"20px 10px 10px"}}>
                    <button type="button" className="btn btn-danger" onClick={deletePerson}>Delete</button>
                </div>
                <div style={{margin:"20px 10px 10px"}}>
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </div>
            
      </form>
    )
}

export default PersonDetails;