import React from 'react';
import Navbar from './Navbar';
import Carrossel from './Carrossel'
import '../App.css'
import Footer from './Footer';

import logo from '../images/espaco-aprender.png'; 
import Notices from './Notices';
const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section className="hero">
                <div className="logo">
                    <img id='logo' src={logo} alt="Logo da Escola" />
                </div>
                </section>
                <section className='carrossel'>
                    <Carrossel/>
                </section>
            </main>
            <Notices/>

            <Footer/>
        </div>
    );
}

export default Home;
