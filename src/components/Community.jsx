import React from 'react'
import Card from './Card'

const Community = () => {
  return (
    <>
    <div className="container">
        <section id='community'>
            <h3 className='community--heading'>
              Inspiration for your next adventure
            </h3>
            <div className="communitys">
              <Card img='desert-king-one.png' alt='desert king one' />
              <Card img='desert-king-two.png' alt='desert king two' />
              <Card img='desert-king-four.png' alt='desert king four' />
              <Card img='desert-king-three.png' alt='desert king three' />
              <Card img='desert-king-five.png' alt='desert king five' />
              <Card img='desert-king-twelve.png' alt='desert king twelve' />
              <Card img='desert-king-six.png' alt='desert king six' />
              <Card img='desert-king-seven.png' alt='desert king seven' />
            </div>
        </section>
    </div>
        
    </>
  )
}

export default Community