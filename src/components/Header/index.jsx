import React from 'react'
import  './Header.css'
import img1 from '../../image/logo.jpg'
import img2 from '../../image/f.png'
import img3 from '../../image/Vector.png'
import img4 from '../../image/t.png'
import img5 from '../../image/path14.png'



export const Header = () => {
    return (
        <div className="block1">
            <nav className="navBar">
                <div className='imgNav'>
                    <img src={img1} alt="logo"/>
                </div>
                <ul className="links">
                    <li className="lis">Home</li>
                    <li className="lis">Blog</li>
                    <li className="lis">Features</li>
                    <li className="lis">Pricing</li>
                    <li className="lis">Documentation</li>
                </ul>
                <div className="logosHeader">
                    <img src={img2} alt="facebook logo"/>
                    <img src={img3} alt="telegram logo"/>
                    <img src={img4} alt="twitter logo"/>
                    <img src={img5} alt="Math logo"/>
                </div>
            </nav>
        </div>
    )
}