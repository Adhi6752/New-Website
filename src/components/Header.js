import React, { Component } from "react";
import { Link } from "react-router-dom";
import download from "./download.png";
import { useState } from "react";

const Header =() =>{
    const [isContainerActive, setIsContainerActive] = React.useState(false);
    let menuToggle = document.querySelector('.menuToggle');
    let header = document.querySelector('header');
    return(
        <header className={`${isContainerActive ? "active" : ""}`}>
            <Link to="/exam"><img src={download} className="logo"/></Link>
            <div className="menuToggle" onClick={()=>{if(isContainerActive==false)setIsContainerActive(true);
                else setIsContainerActive(false);}}></div>
            <nav>
                <ul>
                <li><Link to="/" className="a">About us</Link>
                    <ul>
                    <li><Link to="/" className="a">About Us</Link></li>
                        <li><Link to="/" className="a">Team</Link></li>
                        <li><Link to="/" className="a">Solivar's Mission</Link></li>
                       
                    </ul>
                    </li>
                    <li><Link to="/" className="a">Our Services</Link>
                    <ul>
                    <li><Link to="/" className="a">Application Development</Link></li>
                        <li><Link to="/" className="a">Quality Engineering</Link></li>
                        <li><Link to="/" className="a">Cloud Modernisation</Link></li>
                        <li><Link to="/" className="a">Cloud Governance</Link></li>
                        <li><Link to="/" className="a">Data</Link></li>
                        <li><Link to="/" className="a">Analytics</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/" className="a">Our Work</Link></li>
                    <li><Link to="/" className="a">Blogs</Link></li>
                    <li><Link to="/" className="a">Join The Crew</Link></li>
                    <li><Link to="/" className="a">Our Story</Link></li>
                </ul>
                
            </nav>
            <button className="button">Get In Touch</button>
        </header>
    )
}

export default Header;