import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Map() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="row">
                    <div className="col w25">
                        <div className="post right">
                            <h2>&bull; Contents &bull;</h2>
                            <div className="toc">
                                <Link to="/village">History</Link>
                                <Link className="active" to="/village/map">Map</Link>
                                <Link to="/village/jobs">Jobs</Link>
                                <Link to="/village/housing">Housing</Link>
                                <Link to="/village/commissions">Commissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col w75">
                        <div className="post left">
                            <div className="bookmark">Village / <b>MAP</b></div>
                            <p>Although the village is small, the villagers love living here. Outsiders come and go all the time since it is a conveniently located village when people are travelling. Wistea Village still keeps technology up to date, but the villagers rarely have the chance to use them accordingly.</p>
                            <img src="../Village_map.png" />
                            <p>Features of the village include:</p>
                            <ul>
                                <li>Vast number of forests surrounding the village, native trees growing in between houses and buildings.</li>
                                <li>Wistea is home to a nearby sea that is ideal for fishermen to perform their job. Unfortunately, the sea is not owned by the village, so do not get greedy.</li>
                                <li><b>Mall:</b> A 5-story building with character-owned and clothing stores. A part of the mall has a wide opening at the top where people can view the actual sky. Most of the store lots are empty, so creators are encouraged to run their own business there! A large parking space is also included.</li>
                                <li><b>Hospital:</b> At the back of the hospital, patients are able to walk around and sit in the courtyard so as not to be locked in a hospital room all day.</li>
                                <li><b>Police:</b> At the back of the police department lies a training area.</li>
                                <li><b>Wisteria tree:</b> The tree is located on top of a small hill.</li>
                                <li><b>Residence halls:</b> Buildings were not drawn to scale since we have yet to know how many people are living in the village according to the amount of applicants.</li>
                            </ul>
                            <p>New land will be expanded in the future.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;