import React, { useState, useEffect } from "react";
import Progressbar from "./Progressbar";
import { Link } from "react-router-dom";



function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    return (
        <div className="Navbar_holder fixed-top">
                <nav className={`navbar navbar-expand-lg navbar-light  ${isScrolled ? 'NavBg_color' : ''}`} id="mainNav">
                    <div className="container-fluid">
                    <button className="navbar-toggler Button_Navbar ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars text-white text-center"></i>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="P_Nav navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item intro_last_item_box">
                                    <a className="nav-link active" aria-current="page" href="#Contact">Contact</a>
                                </li>
     
                                <li className="nav-item intro_last_item_box">
                                     <Link to="/View_page" className="nav-link">Resume</Link>
                                </li>
                                <li className="nav-item intro_last_item_box">
                                    <a href="#About_me" className="nav-link">About</a>
                                </li>
                                <li className="nav-item intro_last_item_box">
                                    <a className="nav-link" href="#Certificate">Certificate</a>
                                </li>
                                <li className="nav-item intro_last_item_box">
                                    <a className="nav-link" href="#Projects">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                 <Progressbar/>
        </div>
    );
}

export default Navbar;
