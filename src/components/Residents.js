import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Residents() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="box">
                    <h3>Residents</h3>
                    <p style={{ textAlign: 'center' }}>Available soon.</p>
                </div>
            </div>
        </div>
    );
}

export default Residents;