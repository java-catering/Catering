import React, { Component } from 'react';
import Nav from '../Nav/';
import css from './styles.module.scss';

class Menu extends Component {
    state = {};
    render() {
        return (
            <div className={css.Container}>
                <Nav/>
                <div className={css.ContainerInner}>
                    <h1>Menu</h1>
                </div>
            </div>
        )
    }
}

export default Menu;