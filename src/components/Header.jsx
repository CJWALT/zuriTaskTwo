// import React, { useEffect } from 'react'
import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
// import {Routes, Route} from 'react-router-dom'
// import Main from './Main';
// import PlaceToStay from './PlaceToStay';
const Header = () => {


    const [click, setClick] = React.useState(true);

    const handleClick = () =>{
        setClick(!click);
    }

    return (
    <>
        <header>
            <div className="container">
                <div className="header--wrap">
                    <div className="header--wrap__logo">
                        <a href="/"><img src="img/logo-header.png" alt="metabnb logo" /></a>
                    </div>
                    <div  className={click ? "nav--btn" : "nav--btn show__btn"}>
                        <ul className="nav--links">
                            <li><a href="/" className="nav--link">Home</a></li>
                            <li><a href="/PlaceToStay" className="nav--link">Place to stay</a></li>
                            <li><a href="/nft" className="nav--link">NFTs</a></li>
                            <li><a href="/Community" className="nav--link">Community</a></li>
                        </ul>
                    
                        <div className="header--btn">
                            <a href='/ConnectWallet' className='btn'>Connect Wallet</a>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={handleClick}> 
                        {click ? <FaBars className='home-icon'/> 
                        : <FaTimes className='close-icon'/>}
                    </div>
                </div>

            </div>
        </header>

        
        {/* <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/placeToStay' element={<PlaceToStay/>}/>
      </Routes> */}
     
    </>

  )
}

export default Header