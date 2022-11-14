import React from 'react'
import {FaStar, FaHeart} from 'react-icons/fa'

const Card = (props) => {
   
  return (
    <>
        <article>
            <img src={`img/${props.img}`} alt={`${props.alt}`}/>
            <FaHeart className='heart--icon'/>
            <div className="title--price">
                <h6>
                    Desert King
                </h6>
                <small>1MBT per night</small>
            </div>
            <div className="distance--vacancy">
                <small className="distance">
                    2345km away 
                </small>
                <small className="vacancy">
                    available for 2 weeks stay
                </small>
            </div>
            <div className="fav">
                <FaStar className="star--icon"/>
                <FaStar className="star--icon"/>
                <FaStar className="star--icon"/>
                <FaStar className="star--icon"/>
                <FaStar className="star--icon"/>
            </div>     
                

        </article>
    </>
  )
}

export default Card