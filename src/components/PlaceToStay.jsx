import React from 'react'
import { Link } from 'react-router-dom'
import {IoOptions} from 'react-icons/io5'
import Card from './Card'
const PlaceToStay = () => {
  return (
    <>
        <div className="container">
            <ul className="placetostay--links">
                <li><Link to='/' className='placetostay--link'>Restaurant</Link></li>
                <li><Link to='/' className='placetostay--link'>Cottage</Link></li>
                <li><Link to='/' className='placetostay--link'>Castle</Link></li>
                <li><Link to='/' className='placetostay--link'>Fantast City </Link></li>
                <li><Link to='/' className='placetostay--link'>Beach</Link></li>
                <li><Link to='/' className='placetostay--link'>Carbins</Link></li>
                <li><Link to='/' className='placetostay--link'>Off-grids</Link></li>
                <li><Link to='/' className='placetostay--link'>Farm</Link></li>
                <li><Link to='/' className='placetostay--link'>Location <IoOptions className='option--location'/></Link></li>
            </ul>

            <div className="placetostays">
              <Card img='desert-king-five.png' alt='desert king five' />
              <Card img='desert-king-twelve.png' alt='desert king twelve' />
              <Card img='desert-king-six.png' alt='desert king six' />
              <Card img='desert-king-seven.png' alt='desert king seve' />
              <Card img='desert-king-one.png' alt='desert king one' />
              <Card img='desert-king-two.png' alt='desert king two' />
              <Card img='desert-king-four.png' alt='desert king four' />
              <Card img='desert-king-three.png' alt='desert king three' />
              <Card img='desert-king-eight.png' alt='desert king eight' />
              <Card img='desert-king-nine.png' alt='desert king nine' />
              <Card img='desert-king-ten.png' alt='desert king ten' />
              <Card img='desert-king-eleven.png' alt='desert king eleven' />
              <Card img='desert-king-thirteen.png' alt='desert king thirteen' />
              <Card img='dk-fourteen.png' alt='desert king fourteen' />
              <Card img='dk-fifteen.png' alt='desert king fifteen' />
              <Card img='dk-sixteen.png' alt='desert king sixteen' />
            </div>
        </div>
    </>
  )
}

export default PlaceToStay