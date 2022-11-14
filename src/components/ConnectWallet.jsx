import React from 'react'

import {FaTimes, FaArrowRight} from 'react-icons/fa'
const ConnectWallet = () => {
  return (
    <>
        <section className="connect-wallet">
            <div className="wallet--header">
                <h4 className="wallet-heading">
                Connect Wallet
            </h4>
            <FaTimes/>
            <p>choose your preferred wallet:</p>
            <div className="wallet--wrap">
                <h4>Metamask</h4>
                <FaArrowRight/>
            
                <h4>WalletConnect</h4>
                <FaArrowRight/>
            
            </div>
            </div>
            
        </section>
    </>
  )
}

export default ConnectWallet