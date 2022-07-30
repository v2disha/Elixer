import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import telegram from '../../assets/telegram.png';
import opensea from '../../assets/opensea.png';
import discord from '../../assets/discord.png';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="elx__navbar">
            <div className="elx__navbar-links">
                <div className="elx__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="elx__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#welx">What is Elixer?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                    <p><a href="#">Whitepaper </a></p>
                    <p><a href="#">SmartContract </a></p>
                    <p><a href="#">Wallet</a></p>
                </div>
            </div>
            <div className="elx__navbar-sign">
                <a><img src={instagram} alt="instagram" title='Instagram'/></a>
                <a><img src={twitter} alt="twitter" title='Twitter'/></a>
                <a><img src={telegram} alt="telegram" title='Telegram'/></a>
                <a><img src={opensea} alt="opensea" title='Opensea'/></a>
                <a><img src={discord} alt="discord" title='Discord'/></a>
            </div>
            <div className="elx__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="elx__navbar-menu_container scale-up-center">
                        <div className="elx__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#welx">What is elx?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                            <p><a href="#">Whitepaper </a></p>
                            <p><a href="#">SmartContract </a></p>
                            <p><a href="#">Wallet</a></p>
                        </div>
                        <div className="elx__navbar-menu_container-links-sign">
                            <a><img src={instagram} alt="instagram" /></a>
                            <a><img src={twitter} alt="instagram" /></a>
                            <a><img src={telegram} alt="instagram" /></a>
                            <a><img src={opensea} alt="instagram" /></a>
                            <a><img src={discord} alt="instagram" /></a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
