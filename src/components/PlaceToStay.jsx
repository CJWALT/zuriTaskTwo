import React from 'react'
import Card from './Card'

const PlaceToStay = () => {
  return (
    <>
    <div className="container">
        <section id='placeToStay'>
            <h3 className='placeToStay--heading'>
              Inspiration for your next adventure
            </h3>
            <div className="placeToStays">
              <Card img='desert-king-one.png' alt='desert king one' />
              <Card img='desert-king-two.png' alt='desert king two' />
              <Card img='desert-king-three.png' alt='desert king three' />
              <Card img='desert-king-four.png' alt='desert king four' />
              <Card img='desert-king-five.png' alt='desert king four' />
              <Card img='desert-king-six.png' alt='desert king four' />
              <Card img='desert-king-seven.png' alt='desert king four' />
              <Card img='desert-king-eight.png' alt='desert king four' />
            </div>
        </section>
    </div>
        
    </>
  )
}

export default PlaceToStay