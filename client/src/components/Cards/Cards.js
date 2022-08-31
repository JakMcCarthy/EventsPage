import React from 'react'
import CardItem from '../Cards/CardItem';
import '../Cards/cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1> UPCOMING EVENTS </h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
          <CardItem
              title='Event 1 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
             <CardItem
              title='Event 2 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
            <CardItem
              title='Event 3 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
            
          </ul>

          <ul className="cards-items">
          <CardItem
              title='Event 4 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
             <CardItem
              title='Event 5 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
            <CardItem
              title='Event 6 Title Test'
              text='This event is going to be alot of fun get there early'
              time='2:00pm - 6:00pm'
            />
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards