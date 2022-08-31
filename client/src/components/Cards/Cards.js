import React from 'react'
import CardItem from '../Cards/CardItem';
import '../Cards/cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1> Upcoming Events </h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
          <CardItem
              title='Labor Day Block Party'
              text="Block party for families on Summer Street. We're taking over the whole block!"
              time='Labor Day, 3:00pm - 8:00pm'
            />
             <CardItem
              title='Potluck Picnic'
              text='A picnic in Memorial Park! Bring your favorite picnic dish.'
              time='This Saturday, starting at 6:00pm'
            />
            <CardItem
              title='Brunch Party'
              text='Bottomless mimosas! (21+ event)'
              time='Sunday 9/18, 10:00am - 2:00pm'
            />
            
          </ul>

          <ul className="cards-items">
          <CardItem
              title='Open Mic Night'
              text="Grab your guitars and your books of slam poetry! It's an open mic night at Dave's Downtown Bar."
              time='Every Thursday, 7:00pm - 11:00pm'
            />
             <CardItem
              title="Samantha's Secret Party"
              text='Contact Samantha for details... Only the coolest people are invited'
              time="It's a secret"
            />
            <CardItem
              title='Story Time'
              text='Story time for kids ages 6 - 10 at the public library. Feel free to bring a blanket or stuffed animal!'
              time='Every Tuesday, 3:00pm - 4:00pm'
            />
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards