import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import Nav from '../partials/Nav';

function Jobs() {
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
                                <Link className="active" to="/village/jobs">Jobs</Link>
                                <Link to="/village/housing">Housing</Link>
                                <Link to="/village/commissions">Commissions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col w75">
                        <div className="post left">
                            <div className="bookmark">Village / <b>Jobs</b></div>
                            <p>Each character must have a job. Jobs are additional roles and are used as a distinctive indication of your character. Your character cannot have more than one job. However, they can switch to another job if there is a position available. When you are ready to switch jobs, please ask us mods for consent, specifically Asn.</p>
                            <p>Characters will earn income directly from the listed jobs. The pay is the same for everyone, and their base pay is 1000 coins/weekly (which will be counted into the transaction). Your characters can use their income to buy items from the <a href="https://docs.google.com/spreadsheets/d/1EcEl0NibPxyfNrmhOjKKPF2VK-Bt8iSgT4Yg17ak0aY/edit#gid=1579041329">Village Shop</a> (please note that Village Shop is different from the group store).</p>
                            <p>We have provided our current accepting number of applicants for each job as well. More than the specified amount of people are free to apply for the same job, but we will only decide who will be accepted based on the chart here.</p>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Bakery</strong>
                                        <p>
                                            <b>Bakers:</b> N/A<br />
                                            <b>Cashiers:</b> 0/2
                                        </p>
                                        <p>Local bakery at the [Center] of the village. Well respected by the locals and is famous for their Wisteria buns.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 post left">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Bookstore</strong>
                                        <p>
                                            <b>Sellers:</b> 0/2
                                        </p>
                                        <p>All time best selling books can be found in this tiny little bookstore. All records and books found from all around the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Coffee cafe</strong>
                                        <p>
                                            <b>Varistas:</b> 0/3
                                        </p>
                                        <p>Professionally home-made and custom-made coffee. A very nice smell of coffee will make your day better.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 post left">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Fishery</strong>
                                        <p>
                                            <b>Fishermen:</b> 0/2
                                        </p>
                                        <p>Next to the village lies a beautiful sea. The water is clean and the fishes are native to Wistea Village. Many fishermen get their job done super quickly and earn a decent income.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Flower shop</strong>
                                        <p>
                                            <b>Florist:</b> 0/2
                                        </p>
                                        <p>It is their duty to decorate the annual festival, ceremonies, the village, and even the smallest requests from locals. They are masters of the arts in picking and arranging flowers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 post left">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Hospital</strong>
                                        <p>
                                            <b>Surgeons:</b> 0/2<br />
                                            <b>Doctors:</b> 0/2<br />
                                            <b>Nurses:</b> 0/3<br />
                                            <b>Interns:</b> 0/3
                                        </p>
                                        <p>Rooms are available whenever you need to get treated. Check-ups are free of charge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Wistea Mall</strong>
                                        <p>
                                            <b>Retail:</b> 0/5
                                        </p>
                                        <p>Lots of clothing stores and character-owned stores. The locals and outlanders love it here due to the atmosphere.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 post left">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Wistea University</strong>
                                        <p>
                                            <b>Professors:</b> 0/5
                                        </p>
                                        <p>The only university built in Wistea Village. Built to honor the founder of the village.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_963b35030b4f4c6ab302ad37e16800e0~mv2.png/v1/fill/w_173,h_171,al_c,q_85,usm_0.66_1.00_0.01/bakery.webp" />
                                    <div>
                                        <strong>Pharmacy</strong>
                                        <p>
                                            <b>Pharmacists:</b> N/A<br />
                                            <b>Technicians:</b> 0/3<br />
                                            <b>Interns:</b> 0/2
                                        </p>
                                        <p>Picking and carrying out orders is your thing? Lots of memorization? Join the team to save more lives.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 post left">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_76444b92f6b747edb751e0e4c116a759~mv2.png/v1/fill/w_169,h_167,al_c,q_85,usm_0.66_1.00_0.01/library.webp" />
                                    <div>
                                        <strong>Restaurant</strong>
                                        <p>
                                            <b>Chefs:</b> 0/2<br />
                                            <b>Servers:</b> 0/3
                                        </p>
                                        <p>A local restaurant that outlanders love to come and go dine. Gets very busy at the peak of the day.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col w50 post right">
                                <div className="jobs">
                                    <img src="https://static.wixstatic.com/media/907566_76444b92f6b747edb751e0e4c116a759~mv2.png/v1/fill/w_169,h_167,al_c,q_85,usm_0.66_1.00_0.01/library.webp" />
                                    <div>
                                        <strong>Tea house</strong>
                                        <p>
                                            <b>Connoisseurs:</b> 0/2<br />
                                            <b>Sommeliers:</b> 0/3
                                        </p>
                                        <p>Located just down the street of [Center]. A nice cup of tea will brighten your morning. Sit here for an afternoon tea to hear </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col w50 left">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jobs;