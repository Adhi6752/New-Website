import React, { useState } from "react";
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Body = () => {
    const [service,setService] = useState([0,0,0,0]);
    function Accordion(n){
        setService((prevArray)=>{
            var newArray = [...prevArray];
            if(newArray[n]==1) newArray[n] =0;
            else newArray[n]=1;
            for(var i=0;i<4;i++){
                if(i!=n) newArray[i] = 0;
            }
            
            return newArray;
        })
    }

    return (
        <>
            <div className="top">
                


            </div>


            <div className="paragraphs">
                <div className="paragraph1">
                    <h3>As cloud native innovators, we are a crew of highly skilled specialists focused on Azure, Teams and M365.</h3>
                </div>
                <div className="paragraph2">
                    <p>
                        Arinco brings a unique proposition to today’s market. We have made it our specialty in leveraging emerging technologies, modern productivity tools and cloud native platforms to modernise and build the next generation of intelligent solutions.
                    </p><br />
                    <p>Whether this is driving your organisation’s cloud adoption, transforming your workplace to support remote working, or infusing applications with artificial intelligence, we ar</p><br />
                    <p>Bringing our years of expertise and collaborative approach to working, our objective is to help accelerate your organisation into reaching your forward thinking goals.</p>
                </div>
            </div>

            <div className="accordion">
                <h3 style={{textAlign:"center"}}>Our Services</h3>
                <div className={`contentBX ${(service[0]==1) ? "active" : ""}`}>
                    <div className="label" onClick={() => Accordion(0)}>
                        <div><img  id="contentImage" />
                        <h5>Modern Data</h5></div>
                        <div><p>{(service[0]==0)?'+':'-'}</p></div>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={`contentBX ${(service[1]==1) ? "active" : ""}`}>
                    <div className="label" onClick={() => Accordion(1)}>
                        <div><img id="contentImage"  />
                        <h5>Data Governance</h5></div>
                        <p>{(service[1]==0)?'+':'-'}</p>
                    </div>
                    <div className="content">
                        <div className="sub-content">
                            <img />
                            <h4>SECURE REMOTE WORK</h4>
                            <p>Ensure your workforce can work securely anywhere, any time, on any device</p>
                        </div>
                        <div className="sub-content">
                            <img />
                            <h4>SECURE REMOTE WORK</h4>
                            <p>Ensure your workforce can work securely anywhere, any time, on any device</p>
                        </div>
                        <div className="sub-content">
                            <img />
                            <h4>SECURE REMOTE WORK</h4>
                            <p>Ensure your workforce can work securely anywhere, any time, on any device</p>
                        </div>
                        <div className="sub-content">
                            <img />
                            <h4>SECURE REMOTE WORK</h4>
                            <p>Ensure your workforce can work securely anywhere, any time, on any device</p>
                        </div>
                    </div>
                </div>
                <div className={`contentBX ${(service[2]==1) ? "active" : ""}`}>
                    <div className="label" onClick={() => Accordion(2)}>
                        <div><img  id="contentImage" />
                        <h5>Data Cloud</h5></div>
                        <p >{(service[2]==0)?'+':'-'}</p>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
                <div className={`contentBX ${(service[3]==1) ? "active" : ""}`}>
                    <div className="label" onClick={() => Accordion(3)}>
                        <div><img  id="contentImage"/>
                        <h5>Data Analytics</h5></div>
                        <p>{(service[3]==0)?'+':'-'}</p>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                </div>
            </div>

            <div className="our-clients">
                <h3>Our Clients</h3>
                <div className="client-container">

                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>
                    <div className="client"><img alt="img" /></div>


                </div>

            </div>


            
        </>

    )
}

export default Body;