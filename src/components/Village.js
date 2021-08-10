import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Village() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="row">
                    <div className="col w25">
                        <div className="post right">
                            <h2>&bull; Contents &bull;</h2>
                            <div className="toc">
                                <Link className="active" to="/village">History</Link>
                                <Link to="/village/map">Map</Link>
                                <Link to="/village/jobs">Jobs</Link>
                                <Link to="/village/housing">Housing</Link>
                                <Link to="/village/commissions">Commissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col w75">
                        <div className="post left">
                            <div className="bookmark">Village / <b>History</b></div>
                            <p><em>...Let me take you to the beginning of the village.</em></p>
                            <p>In the midst of a cleansing sea, a faint glow emitted within the horizon line. A man rowed his boat, purging into the front of an incoming atmospheric fog, searching for that glow of light. As he navigated further into the sea, an island came to view, and the same light still emitted from within.</p>
                            <p>He landed ashore and traveled closer to the light until the setting changed - in terms of brightness and mood. It was a beautiful scene, wisteria vines hung down from a particular-looking tree.</p>
                            <p>He stood next to it, tried plucking its children's vines, climbed and jumped to grab support - and was thrown back by its overpowering aura… Realizing the symbol and value of the wisteria, he discarded his journey in the sea for the beauty of such existence.</p>
                            <p>The island seemed untouched - no sight of human presence, but it was adaptive.</p>
                            <p>He became too fond of the tree and established a bond with it. He could make a living using all the abundant resources here.</p>
                            <p>A group of friends arrived a week’s time after the man spread news of the island. They helped to create the civilization the man started on his own. It was habitable by the time they set foot, which strengthened their decision of a new settlement.</p>
                            <p>That man was our founder (determined to be the first village head), and he planned a ceremony to be held in two week’s time after the project completion.</p>
                            <p>In short notice, the man fell sick and passed away with an established will. The will was passed to his granddaughter, the current village master. After inauguration, she initiated an annual festival to celebrate the village’s anniversary, organized many social events, and validated construction of schools. The village was just getting better.</p>
                            <p>And as for the Wisteria tree, it continued to sustain the village their yearned peace and growth. But, the tree remains a symbol of worship for the villagers - to wish them luck and prosperity. Its existence still surrounds an invisible and mysterious globe.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Village;