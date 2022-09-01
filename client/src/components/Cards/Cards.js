import React, { useState, useEffect } from 'react';
import CardItem from '../Cards/CardItem';
import '../Cards/cards.css';

function Cards() {
  let [eventData, setEventData] = useState([]);
  useEffect(() => {
    let data = fetch('./api/event/', { 'Content-Type': 'application/json' })
      .then((databyte) => databyte.json())
      .then((res) => {
        setEventData(res);
        console.log(test);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(eventData);

  let EventCards = [];

  for (let i=0;i<eventData.length;i++){

    EventCards.push(<CardItem title={eventData[i].eventTitle}
       text={eventData[i].eventText} time={eventData[i].eventTime}></CardItem>);
    
  }
console.log(EventCards)
  return (
    <div className='cards'>
      <h1> Upcoming Events </h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            {EventCards}

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
