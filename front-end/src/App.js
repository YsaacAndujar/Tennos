import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import PersonsList from './components/PersonsList';
function App() {
    return(
        
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<PersonsList/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;