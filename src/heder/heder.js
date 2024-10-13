import React from "react";
import "/Users/mac/Desktop/kurs/projekti/my-react-project/src/heder/heder.css"
import logo from "/Users/mac/Desktop/kurs/projekti/my-react-project/src/imges/centarnit_logo.jpeg"
export default function Heder(){
    return (
        <div className="header">
            <ul className="navbar">
                <li>
                    <a href="https://centarnit.com">
                        <img src={logo}></img>
                    </a>
                </li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
        </div>
    )
}