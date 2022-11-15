import React from 'react'

import {FaTimes, FaGreaterThan} from 'react-icons/fa'
const ConnectWallet = (props) => {
    
    const modalState = props.toggle
    
    const toggleClose = props.closeClick
   

  return (
    <>
        <section className={modalState ? "connect-wallet show--connect__wallet " : "connect-wallet" } >
            <div className="connect-wallet__wrap">
                    <div className="wallet--header">
                        <h4 className="wallet-heading">
                             Connect Wallet
                        </h4>
                        <FaTimes className="modal--close" onClick={toggleClose}/>
                    </div>
                    <div className="modal--para__wallet">
                        <p>Choose your preferred wallet:</p>
                        <div className="wallet--wrap">
                            <div className="modal--options">
                                <div className="option--header">
                                    <img src="img/maskLogo.png" alt="metaMask logo"/>
                                    <h4>Metamask</h4>
                                </div>
                                <FaGreaterThan/>
                            </div>
                            <div className="modal--options">
                                <div className="option--header">
                                    <img src="img/walletConnect.png" alt="wallet connect logo"/>
                                    <h4>WalletConnect</h4>
                                </div>
                                <FaGreaterThan/>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
    </>
  )
}

export default ConnectWallet