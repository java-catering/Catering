import React, {Component} from 'react';
import css from './styles.module.scss';
import { Link } from 'buttermilk';

class Nav extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <nav className={css.Container}>
                <div className={css.Container__InnerContainer}>
                    <div>
                        <h1>Catering Service</h1>
                    </div>
                    <div className={css.Container__ButtonContainer}>
                        <Link href="/">Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/order">Order</Link>
                        <Link href="/contact">Contact</Link>
                        <button className={css.Container__ButtonSignup}>Sign Up</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;