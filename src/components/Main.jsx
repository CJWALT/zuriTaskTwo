import React from 'react'
import Nfts from './Nfts'
import Community from './Community'
import SponsorBar from './SponsorBar'

const Main = () => {
  return (
    <>
     <div className="container">
      <main>
          <div className="banner"> 
            <h1 className="banner--heading">Rent a <span className="heading--color">place</span> far from <br/><span className="heading--color">home</span> in the <span className="heading--color">metaverse </span></h1>
            <p className="banner--para">we provide you access to luxury and affordable houses <br/> 
              in the metaverse, get a chace to turn your <br/>
              imagination to reality at your comfort zone</p>
            <fieldset> 
              <input type="text" placeholder='Search for location' />
              <button id='search'>Search</button>
            </fieldset>
          </div>
          <div className="banner--img">
            <img src='img/banner-img.png' alt='banner grid bnb'/>
          </div>
        </main>  
      </div>
      <SponsorBar /> 
        <Community />
        <Nfts/>
    </>
  )
}

export default Main