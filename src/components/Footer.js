import React from "react";
import { Link } from "react-router-dom";
const Footer =() =>{
    return(
        
        <div className="footer" >

            <div><button onClick={() => {
                window.scrollTo({
                    top: 0, behavior: 'smooth'
                })
            }}>&#94;</button></div>
                <div id="fcontainer">
                    <div>
                        <h3>Our Services</h3><br/>
                        <Link to="/" className="fservice">Modern Work</Link><br/>
                        <Link to="/" className="fservice">Cloud Modernisation</Link><br/>
                        <Link to="/" className="fservice">Cloud Governance</Link><br/>
                        <Link to="/" className="fservice">ApplicationAI</Link><br/>
                        <Link to="/" className="fservice">Data Analytics</Link><br/>

                    </div>
                    <div>
                    <h3>Company</h3><br/>
                        <Link to="/" className="fservice">About Us</Link><br/>
                        <Link to="/" className="fservice">Carrer</Link><br/>
                        <Link to="/" className="fservice">Meet the Team</Link><br/>

                    </div>
                    <div>
                    <h3>Our Links</h3><br/>
                        <Link to="/" className="fservice">Privacy Policy</Link><br/>
                        <Link to="/" className="fservice">Accessibility Statement</Link><br/>

                    </div>
                    <div>
                        <h3>Find us on</h3>
                    </div>
                </div>
        </div>
    )
}

export default Footer;