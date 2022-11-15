// import React, { useEffect } from 'react'
import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link, Route, Routes } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';
import Main from './Main';
import Nfts from './Nfts';
import Community from './Community';

const Header = () => {


    const [click, setClick] = useState(true);

    const [openModal, setOpenModal] = useState(false)

    const handleClick = () =>{
        setClick(!click);
    }

    const handleModalClick = () =>{
        setOpenModal(!openModal)
    }

    return (
    <>
        <header>
            <div className="container">
                <div className="header--wrap">
                    <div className="header--wrap__logo">
                        <Link to="/"><img src="img/logo-header.png" alt="metabnb logo" /></Link>
                    </div>
                    <div  className={click ? "nav--btn" : "nav--btn show__btn"}>
                        <ul className="nav--links">
                            <li><Link to="/" className="nav--link">Home</Link></li>
                            <li><Link to="/placetostay" className="nav--link">Place to stay</Link></li>
                            <li><Link to="/nft" className="nav--link">NFTs</Link></li>
                            <li><Link to="/community" className="nav--link">Community</Link></li>
                        </ul>
                    
                        <div className="header--btn">
                            <button className='btn' onClick={handleModalClick}>Connect Wallet</button>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={handleClick}> 
                        {click ? <FaBars className='home-icon'/> 
                        : <FaTimes className='close-icon'/>}
                    </div>
                </div>

            </div>
           
        </header>

         <ConnectWallet toggle={openModal} closeClick={handleModalClick}/>
        
         <Routes>
           <Route exact path='/' element={<Main />}/>
            <Route path='/community' element={<Community />}/>
            <Route path='/nft' element={<Nfts />}/>
        </Routes> 
    
    </>

  )
}

export default Header