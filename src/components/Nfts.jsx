import React from 'react'

const Nfts = () => {
  return (
    <>
        <section id="nft">
            <div className="container">
                <div className="nft--wrap">
                    <div className="nft--banner">
                        <h3>Metabnb NFTs</h3>
                        <p className="nft--para">
                            Discover our NFT gift cards collection. Loyal <br/> 
                            customers gets amazing gift cards which are <br/> 
                            traded as NFTs. These NFTs gives our customer <br/> 
                            access to loads of our exclusive services.
                        </p>
                        <button id="learn-more" className="btn--nft">Learn more</button>
                    </div>
                    <div className="nft--banner__img">
                        <img src='img/nft-grid.png' alt='nft grid'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Nfts