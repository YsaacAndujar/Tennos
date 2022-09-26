import React from 'react';
import { useParams } from "react-router-dom";
function PersonDetails() {
    return(
        <>{useParams()["id"]}</>
    )
}

export default PersonDetails;