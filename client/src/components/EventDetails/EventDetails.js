import React from 'react';

const EventDetails = ({ onClose, currentEvent }) => {
  const { name, description, category, ticketPrice, ticketsSold, time, location, creator, creationTimestamp } = currentEvent;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">
            {name} 
        </h3>
        <ul className="eventDetails">
            <li className="eventCategory">
                Event Type: {category}
            </li>
            <li className="eventTime">
                Date: {time}
            </li>
            <li className="eventLocation">
                Location: {location}
            </li>
            <li className='eventCreator'>
                Created by: {creator} at {creationTimestamp}
            </li>
            <li className="eventPrice">
                Ticket Price: {ticketPrice}
            </li>
            <li className="eventAttendees">
                Tickets sold: {ticketsSold}
            </li>
        </ul>
        <p>
            {description}
        </p>
        <button type="button" class="eventSignup">
          Sign Me Up!
        </button>

        <button type="button" onClick={onClose}>
          Close this event
        </button>
      </div>
    </div>
  );
};

export default EventDetails;