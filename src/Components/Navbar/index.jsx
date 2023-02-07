import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar-wrappper'>
            <div className="img-wrapper">
                <img src="/vectors/userhive_light.b831a4e7.svg" alt="logo" className='nav-img' />
                <span className='userhive'>Userhive</span>
            </div>
            {/* <div> */}
            <button className='navbar-button'>Let's go</button>

            {/* </div> */}
        </nav>
    )
}

export default Navbar
