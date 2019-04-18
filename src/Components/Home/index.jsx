import React, { Component } from 'react';
import css from './styles.module.scss';
import Nav from '../Nav';


class Home extends Component{
    state = {};
    render(){
        return (
            <div className={css.Container}>
                <Nav/>
                <section className={css.splash}>
                    <h1>
                        Welcome to Catering Service!
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna vitae mauris lacinia sollicitudin at sed diam. Fusce euismod nisi in turpis dictum ullamcorper. Etiam efficitur ante ac turpis pellentesque, et elementum velit lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </p>
                    <div>
                        <button>Flight Menu</button>
                        <button>Cafe Menu</button>
                    </div>
                </section>
                <section className={css.description}>
                    <div className={css.descriptionInner}>
                        <h1>
                            How We Work
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className={css.cardContainer}>
                            <div className={css.card}>
                                <h2>Browse</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className={css.card}>
                                <h2>Order</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className={css.card}>
                                <h2>Enjoy</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={css.descriptionInner__Background}/>
                    </div>
                </section>
                <section className={css.menuContainer}>
                    <div className={css.menuInner}>
                        <div className={css.menu}>
                            <div className={css.menuItem}>
                                <div className={css.menuContent}>
                                    <h2>Hamburger</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className={css.price}>From $9.99</p>
                                </div>
                                <div className={css.image}>
                                </div>
                            </div>
                            <div className={css.menuItem}>
                                <div className={css.menuContent}>
                                    <h2>Hamburger</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className={css.price}>From $9.99</p>
                                </div>
                                <div className={css.image}>
                                </div>
                            </div>
                            <div className={css.menuItem}>
                                <div className={css.image}>
                                </div>
                                <div className={css.menuContent}>
                                    <h2>Hamburger</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className={css.price}>From $9.99</p>
                                </div>
                            </div>
                            <div className={css.menuItem}>
                                <div className={css.image}>
                                </div>
                                <div className={css.menuContent}>
                                    <h2>Hamburger</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className={css.price}>From $9.99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={css.ctaContainer}>
                    <div className={css.ctaInner}>
                        <h3>The future of catering services starts here, Order from anywhere online.</h3>
                        <button>Get Started</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home;