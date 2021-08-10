import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Housing() {
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
                                <Link to="/village/map">Map</Link>
                                <Link to="/village/jobs">Jobs</Link>
                                <Link className="active" to="/village/housing">Housing</Link>
                                <Link to="/village/commissions">Commissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col w75">
                        <div className="post left">
                            <div className="bookmark">Village / <b>HOUSING</b></div>
                            <p>As a member of the village, you will get your own house. Each house includes a bath area, dining room and kitchen, a bedroom, and a living room. While the house is free to own, you are responsible for making enough income to pay for your living expenses.</p>
                            <p>This is the only available floor plan for residents. If you want to live with another character, you need to ask consent before we unlock a new community for only 2 people (2 bedrooms).</p>
                            <img src="../Floor_plan.png"/>
                            <p>Extra features include:</p>
                            <ul>
                                <li>Metal gates surrounding the front of the house, brick walled backyard with brown tiles and grass.</li>
                                <li>One entrance door, one slide door to the backyard, and eight windows. The floors are all wooden.</li>
                                <li><b>Living room:</b> A flat television on the wall, a couch, a coffee table, an accent table, and a comfy rug.</li>
                                <li><b>Bedroom:</b> A full size (or other sizes depending on character) bed with pillows and blankets, a long wardrobe underneath the bed, a nightstand, and a desk.</li>
                                <li><b>Kitchen:</b> A large refrigerator, an oven and sink, along with drawers.</li>
                                <li><b>Dining area:</b> Four chairs to a table.</li>
                                <li><b>Bathroom:</b> A sink, bath, and toilet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Housing;