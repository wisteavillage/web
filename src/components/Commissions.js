import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Commissions() {
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
                                <Link to="/village/housing">Housing</Link>
                                <Link className="active" to="/village/commissions">Commissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col w75">
                        <div className="post left">
                            <div className="bookmark">Village / <b>Commissions</b></div>
                            <h4>Commission Hall</h4>
                            <p>The Commission Hall is built for the villagers and visitors alike who face problems that need assistance. It is important to Wistea that we come to assist each other during times of need, let it be small, big, personal, formal, and anything in between. Anyone can take on any of the posted commissions! Great rewards may come to those that help.</p>
                            <h4>Commissions</h4>
                            <p>Respectful little birds (villagers call them the Toto birds) are the lead helpers at the commission hall. A Toto will be with you and your party as a helpful guide through each of the commissions you picked up (your choice to include them on your commission is up to you). The bird has two main jobs: it serves as your character's first interaction before a commission and informs your character about the latest news (mostly from outside the village).</p>
                            <p>Although your character will each get their own Toto bird, the birds do not accompany you all the time—since they work at the commission hall as full-time employees.</p>
                            <p>Since it can potentially be dangerous, it is necessary for every commission to be carried out with at least a party of two (#1 rule at the commission hall!). Each commission will have recommended titles that are encouraged to join, but not obligated to. Some choices can only be made if certain jobs participate in the commission! But fear not -! For example, even if a commissioner wants a certain flower the florist knows really well, the florist doesn't have to be in the party to complete the task. Though picking out the right flower would certainly be a big help to the commissioner and they most definitely will reward you better! As long as the task is completed to some degree, your party will get the listed reward(s) with or without bonus. Failing the commission is also possible, so make your choices wisely! In the case of failing the commission task, you will still get consolation rewards so don't get discouraged!</p>
                            <p>Use shop items to help you and your party out during commissions!</p>
                            <p>If you're stuck, your Toto can lend you a hand! This means your character is allowed to request help from the actual Toto bird or its items. However, using a Toto item will cost your character coins, so use them wisely. Toto is very knowledgeable and can help if certain jobs are not present in the party or if certain stat conditions are not met. Toto's items can be purchased at the Village Shop (see details on <a href="https://docs.google.com/spreadsheets/d/1EcEl0NibPxyfNrmhOjKKPF2VK-Bt8iSgT4Yg17ak0aY/edit#gid=1579041329">Village Shop</a>).</p>
                            <p><b>Multiplicity for Commissions are 2x.</b></p>
                        </div>
                        <div className="post left">
                            <h4>Requests</h4>
                            <p>Requests are separate from commissions. Requests are actual tasks that the <i>characters</i> put up on the task board. Requests are side quests that can be done in one RP alone. You are allowed to make up what the request is or ask us mods to create one for you. You are free to tag along with another character to complete the request together. Both party names will need to be written down to be counted for currencies. <b>Multiplicity for Requests are 1x.</b></p>
                            <p>Examples of requests:</p>
                            <ul>
                                <li>A fisherman forgot to bring their fish net, your responsibility is to bring him his fish net.</li>
                                <li>The bookstore is in a shortage of books and the delivery is a week away, your responsibility is to provide a safer delivery or deliver the books on time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Commissions;