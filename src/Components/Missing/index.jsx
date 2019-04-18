import React, { Component} from 'react';
import css from './styles.module.scss';
import Nav from '../Nav';


class Missing extends Component {
    state = {};

    render(){
        return (
            <div className={css.Container}>
                <Nav/>
                <div className={css.Container__Inner}>
                    <h1>404</h1>
                </div>
            </div>
        )
    }
}

export default Missing;