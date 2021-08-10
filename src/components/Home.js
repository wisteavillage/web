import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Home() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="row">
                    <div className="col w30">
                        <div className="post right">
                            <h2>&bull; RP Status &bull;</h2>
                            <p>
                                <b>Reservations:</b> Aug 12 - Aug 31<br /><b>Pre-Server:</b> Aug 15 - Aug 31<br /><b>Join Requests:</b> Aug 13 - Aug 31
                            </p>
                        </div>
                    </div>
                    <div className="col w70">
                        <div className="post left">
                            <div className="social">
                                <Link to="#">
                                    <svg id="icon-925" viewBox="0 0 40 40">
                                        <path d="M30,9.2L24,20.9l0.5,0.6H30v8.3H19.9L19,30.5l-2.8,5.5l-0.6,0.6h-6v-6.1l6.1-11.7l-0.5-0.6H9.5V9.8h10.2l0.9-0.6l2.8-5.5 L24,3.2h6C30,3.2,30,9.2,30,9.2z"></path>
                                    </svg>
                                </Link>
                                <p style={{ textAlign: 'center' }}>slice-of-life / semi-harvest moon / casual + free-form / 16+</p>
                                <Link to="#">
                                    <svg id="icon-93f" viewBox="0 0 40 40">
                                        <path d="M28.8,33.3c0,0-1.1-1.4-2.1-2.6c4.1-1.2,5.7-3.8,5.7-3.8c-1.3,0.9-2.5,1.5-3.6,1.9c-1.6,0.7-3.1,1.1-4.6,1.4 c-3,0.6-5.8,0.4-8.2,0c-1.8-0.3-3.3-0.9-4.6-1.4c-0.7-0.3-1.5-0.6-2.3-1.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.1-0.1-0.1-0.1 c-0.6-0.3-0.9-0.5-0.9-0.5s1.5,2.5,5.5,3.7c-0.9,1.2-2.1,2.6-2.1,2.6c-7-0.2-9.6-4.8-9.6-4.8c0-10.1,4.5-18.4,4.5-18.4 c4.5-3.4,8.9-3.3,8.9-3.3l0.3,0.4c-5.7,1.6-8.3,4.1-8.3,4.1s0.7-0.4,1.9-0.9c3.4-1.5,6.1-1.9,7.2-2c0.2,0,0.3-0.1,0.5-0.1 C18.6,8.1,20.7,8,23,8.3c3,0.3,6.2,1.2,9.5,3c0,0-2.5-2.4-7.9-4l0.4-0.5c0,0,4.3-0.1,8.9,3.3c0,0,4.5,8.2,4.5,18.4 C38.5,28.5,35.8,33.1,28.8,33.3z M14.2,18.6c-1.8,0-3.2,1.6-3.2,3.5s1.5,3.5,3.2,3.5c1.8,0,3.2-1.6,3.2-3.5 C17.4,20.1,16,18.6,14.2,18.6z M25.7,18.6c-1.8,0-3.2,1.6-3.2,3.5s1.5,3.5,3.2,3.5c1.8,0,3.2-1.6,3.2-3.5S27.5,18.6,25.7,18.6z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="post left">
                            <h2>&bull; About &bull;</h2>
                            <p>The group will be mostly slice-of-life so there won’t be a main story needed. Story (side) events will appear, but most are going to be about outside Wistea Village. A real story (main) event in Wistea Village will happen in the late future, to unlock the mystery behind the village and the tree. In addition, it will be semi-harvest moon based (which is ideal for those who play Rune Factory, and the playstyle should get people to feel that vibe).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;