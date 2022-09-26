import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import PersonsList from './components/PersonsList';
import PersonDetails from './components/PersonDetails';
function App() {
    return(
        
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">TENNOS</Link>
                </div>
            </nav>
            <div className="container">
                
                <Routes>
                    <Route path="/" element={<PersonsList/>} />
                    <Route path="/:id" element={<PersonDetails/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;