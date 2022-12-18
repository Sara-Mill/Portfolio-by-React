import React from 'react';
import { Navbar } from '../../components';

import './Header.css';

function Header () {

    return (
        <section className='header'>
            <section className= 'header-top'>
                <section className='header-top__logo'>
                    <a href='/' className= 'header-logo'>Sara Milligan</a>
                </section>
                <section className='header-top__navbar'>
                    <section className='header-top__navigation'>
                        <Navbar />
                    </section>
                    <hr className='header-top__seperator' />
                </section>

           </section>
        </section>
    )
}

export default Header;