import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Events() {
    return (
        <div className="wrapper">
            <Nav />
            <div className="main">
                <div className="box">
                    <h3>Main</h3>
                    <p>Main events are the heart of Wistea Village. They include holidays and festivals... And they can include serious adventures that could potentially be dangerous since the entire land (the village lies only a portion of the land) has not yet been scouted. Events are worth more than individual RPs.</p>
                    <div className="event">
                        <div className="news v3">
                            <div className="date">
                                <big>06.15</big>
                                <small>2021</small>
                            </div>
                            <div>
                                <p>Annual Festival</p>
                                <em>[June 15th]</em>
                            </div>
                        </div>
                        <img src=""/>
                        <ul>
                            <li>The day that the founder of this village set foot on this land. The event is usually held for a month, depending if another holiday crashes. This is the time when all the villagers get busy as they set up for the celebration.</li>
                            <li>Event commissions will appear and characters will need to help out.</li>
                            <li>At the end of the festival, a cooking contest will take place and characters are allowed to vote for the best dishes.</li>
                            <ul>
                                <li>Chefs, draw your favorite dish. Non chefs, draw a dish you'd like to taste.</li>
                                <li>After the event, these dishes will become available as Chef's Specials! Residents can buy them at the Shop!</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="event">
                        <div className="news v3">
                            <div className="date">
                                <big>07.19</big>
                                <small>2021</small>
                            </div>
                            <div>
                                <p>??? (LOCKED)</p>
                                <em>[MONTH ## - MONTH ##]</em>
                            </div>
                        </div>
                        <ul>
                            <li>SPOILER: Whoosh. Settling out in the woods and forests, people embark on the journey to discover the secrets and mysterious meanings behind the Wisteria tree. Where will it lead you to? A magic realm? An underground cave? They await you.</li>
                            <li>(Large features and updates will be added to the group, so please be on the lookout!)</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <h3>Side</h3>
                    <p>Regarding your job, your house, your life. Usually involves small holidays, personal situations, or from outside the village.</p>
                    <div className="event">
                        <div className="news v3">
                            <div className="date">
                                <big>12.01</big>
                                <small>2021</small>
                            </div>
                            <div>
                                <p>Secret Santa</p>
                                <em>[December 1st - January 1st]</em>
                            </div>
                        </div>
                        <ul>
                            <li>It is that time of the year where creators get creative. Sign up as Santa and draw for the one request assigned to you.</li>
                        </ul>
                    </div>
                    <div className="event">
                        <div className="news v3">
                            <div className="date">
                                <big>05.05</big>
                                <small>2021</small>
                            </div>
                            <div>
                                <p>Wisteria Day</p>
                                <em>[May 5th]</em>
                            </div>
                        </div>
                        <ul>
                            <li>The only wisteria tree in all of Wistea Village blooms every spring. Wisterias take up to 4 weeks to start blossoming.</li>
                            <li>On May 5th, villagers come to the heart of the tree to witness the bloom.</li>
                            <li>After May 5th, villagers either collect wisteria petals or cut a branch from the tree to put on display for their houses or stores, honoring the village’s symbol of peace and growth.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;